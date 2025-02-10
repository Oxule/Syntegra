import {useAuth} from "./Auth.js";
import {CodeHighlight} from "@mantine/code-highlight";
import {GenerateSchemeLang} from "./Scheme/SchemeLangGeneration.js";

export function Test() {
    const [isAuth, authHeader, authCredentials] = useAuth();



    const exampleCode = `SomeType //description, restrictions, etc.
{
    int a = 5; //description, restrictions, etc.
    bool b = false; //description, restrictions, etc.
    SomeOtherType c //description, restrictions, etc.
    {
        float a = 0.1; //description, restrictions, etc.
        int g = 10; //description, restrictions, etc.
    }
    SomeArrayType[]? g //description, restrictions, etc.
    {
        string g;
    }
}`;


    const schemes = [
        {
            id: "1",
            name: "CreateUser",
            fields:[
                {
                    name: "id",
                    type: "schemes.Id"
                },
                {
                    name: "name",
                    type: "string",
                    description: "length [3-64]"
                },
                {
                    name: "password",
                    type: "string",
                    description: "length [8-64], special regex"
                }
            ]
        },
        {
            id: "2",
            name: "Id",
            fields: [
                {
                    name: "this",
                    description: "just UUID",
                    type: "string",
                }
            ]
        }
    ]

    const generatedSchemeCode = GenerateSchemeLang(schemes);


    return <>
        <h1>Auth: {isAuth ? "Yes" : "No"}</h1>
        {isAuth &&
            <>
                <h2>Header: {JSON.stringify(authHeader)}</h2>
                <h2>Credentials: {JSON.stringify(authCredentials)}</h2>
            </>
        }

        <div style={{height:"100px"}}/>

        <CodeHighlight code={exampleCode} lang={"cs"}/>
    </>
}