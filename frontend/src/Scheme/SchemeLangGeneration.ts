import {Field, Scheme} from "./SchemeType";

const PRIMITIVES: { [key: string]: boolean } = {
    "int": true,
    "string": true,
    "bool": true,
    "float": true,
};

/**
 * Разбирает тип поля.
 * Если тип оканчивается на "[]", то isArray = true.
 * Если тип начинается с "schemes.", то берём имя без префикса.
 * Если базовый тип не является примитивом и найдена схема с таким именем, то помечаем его как пользовательский.
 */
function parseFieldType(
    fieldType: string,
    schemes: Scheme[]
): { baseType: string; isArray: boolean; isCustom: boolean } {
    let isArray = false;
    let base = fieldType;

    // @ts-ignore
    if (fieldType.endsWith("[]")) {
        isArray = true;
        base = fieldType.substring(0, fieldType.length - 2);
    }

    let baseType = base;
    // @ts-ignore
    if (base.startsWith("schemes.")) {
        baseType = base.substring("schemes.".length);
    }

    let isCustom = !PRIMITIVES[baseType] && schemes.some(s => s.name === baseType);

    return { baseType, isArray, isCustom };
}

/**
 * Рекурсивная функция для форматирования списка полей.
 *
 * Если поле ссылается на пользовательский тип, то:
 * - Если схема этого типа содержит ровно одно поле с именем "this", то выводится одна строка с «развёрнутым» типом:
 *
 *   <innerType> <fieldName>; //(Тип) <innerField.description>[, <field.description>]
 *
 * - Иначе, выводится строка поля и затем, внутри блока, разворачиваются все его поля.
 *
 * @param fields  – массив полей для форматирования
 * @param schemes – список всех схем
 * @param indent  – текущий отступ (например, два пробела)
 * @param visited – объект для отслеживания уже обработанных схем (ключ – имя схемы)
 */
function formatFields(
    fields: Field[],
    schemes: Scheme[],
    indent: string,
    visited: { [key: string]: boolean }
): string {
    let result = "";

    for (const field of fields) {
        const { baseType, isArray, isCustom } = parseFieldType(field.type, schemes);

        const arrayPostfix = isArray ? "[]" : "";
        const nullablePostfix = field.nullable ? "?" : ""
        const type = baseType + arrayPostfix + nullablePostfix;

        console.log(field.type, baseType, isArray, isCustom, type);

        if (isCustom) {
            // @ts-ignore
            const nestedScheme = schemes.find(s => s.name === baseType);
            if (nestedScheme && nestedScheme.fields.length === 1 && nestedScheme.fields[0].name === "this") {
                const innerField = nestedScheme.fields[0];
                let flattenedType = innerField.type;
                if (flattenedType.startsWith("schemes.")) {
                    flattenedType = flattenedType.substring("schemes.".length);
                }
                flattenedType += arrayPostfix + nullablePostfix;
                let commentParts = [`(${baseType})`];
                if (innerField.description) {
                    commentParts.push(innerField.description);
                }
                if (field.description) {
                    commentParts.push(field.description);
                }
                const comment = commentParts.join(" ");
                const line = indent +
                    flattenedType +
                    " " +
                    field.name +
                    (field.default !== undefined ? " = " + field.default : "") +
                    "; //" +
                    comment;
                result += line + "\n";
                continue;
            }
        }
        let line = indent +
            type +
            " " +
            field.name +
            (field.default !== undefined ? " = " + field.default : "") +
            ";";
        if (field.description) {
            line += " // " + field.description;
        }
        result += line + "\n";

        if (isCustom) {
            // @ts-ignore
            const nestedScheme = schemes.find(s => s.name === baseType);
            if (nestedScheme) {
                if (visited[nestedScheme.name]) {
                    result += indent + "  " + "/* cyclic reference: " + nestedScheme.name + " */\n";
                } else {
                    visited[nestedScheme.name] = true;
                    result += indent + "{\n";
                    result += formatFields(nestedScheme.fields, schemes, indent + "    ", visited);
                    result += indent + "}\n";
                }
            }
        }
    }

    return result;
}

/**
 * Основная функция, которая принимает массив схем и имя схемы,
 * после чего возвращает её представление в требуемом формате.
 *
 * Пример вывода для схемы "CreateUser":
 *
 * CreateUser
 * {
 *   string id; //(Id) just UUID
 *   string name; // length [3-64]
 *   string password; // length [8-64], special regex
 * }
 */
export function convertScheme(schemes: Scheme[], schemeName: string): string {
    // @ts-ignore
    const scheme = schemes.find(s => s.name === schemeName);
    if (!scheme) {
        throw new Error("Scheme not found: " + schemeName);
    }

    let visited: { [key: string]: boolean } = {};
    visited[scheme.name] = true;

    let result = scheme.name + "\n{\n";
    result += formatFields(scheme.fields, schemes, "    ", visited);
    result += "}";
    return result;
}