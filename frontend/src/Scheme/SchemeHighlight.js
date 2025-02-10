export default function(hljs) {
    // Подсветка однострочных комментариев вида //
    const COMMENT = hljs.COMMENT('//', '$');

    // Ключевые слова – базовые типы и литералы
    const KEYWORDS = {
        keyword: 'int bool float string true false'
    };

    // Подсветка имен типов: начинаются с заглавной буквы, могут оканчиваться на "[]"
    const CUSTOM_TYPE = {
        className: 'type',
        begin: /\b[A-Z][A-Za-z0-9_]*(\[\])?\b/
    };

    // Подсветка числовых литералов (целых и дробных)
    const NUMBER = {
        className: 'number',
        variants: [
            { begin: /\b\d+\.\d+\b/ },
            { begin: /\b\d+\b/ }
        ]
    };

    // Подсветка строк в двойных кавычках (если они используются)
    const STRING = {
        className: 'string',
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        contains: [hljs.BACKSLASH_ESCAPE]
    };

    // Подсветка оператора присваивания
    const OPERATOR = {
        className: 'operator',
        begin: /=/
    };

    // Подсветка знаков пунктуации: фигурных скобок и точки с запятой
    const PUNCTUATION = {
        className: 'punctuation',
        begin: /[{};]/
    };

    // Рекурсивное определение блока – позволяет подсвечивать вложенные конструкции
    const BLOCK = {
        begin: /\{/,
        end: /\}/,
        contains: [
            // Рекурсия для вложенных блоков
            'self',
            COMMENT,
            NUMBER,
            STRING,
            CUSTOM_TYPE,
            OPERATOR,
            PUNCTUATION
        ]
    };

    return {
        name: 'SchemeLang',
        aliases: ['schemelang'],
        keywords: KEYWORDS,
        contains: [
            COMMENT,
            NUMBER,
            STRING,
            CUSTOM_TYPE,
            OPERATOR,
            PUNCTUATION,
            BLOCK
        ]
    };
}
