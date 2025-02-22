import {useAuth} from "./Auth.js";
import {CodeHighlight} from "@mantine/code-highlight";
import {convertScheme} from "./Scheme/SchemeLangGeneration.ts";
import {Button} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {CreateSchemeModal} from "./Scheme/SchemeCreation.jsx";
import {useRef, useState} from "react";
import {TypeSelector} from "./Scheme/TypeSelector.jsx";

export function Test() {
    const [isAuth, authHeader, authCredentials] = useAuth();


    const schemes = [
        {
            id: "1",
            name: "User",
            fields: [
                {
                    name: "id",
                    type: "schemes.Id",
                    description: "User unique identifier"
                },
                {
                    name: "name",
                    type: "string",
                    description: "length [3-64]"
                },
                {
                    name: "surname",
                    type: "string"
                },
                {
                    name: "roles",
                    type: "string[]",
                    description: "User roles in the system",
                    default: `["user"]`
                },
                {
                    name: "emails",
                    type: "string[]",
                    description: "List of alternative emails",
                    nullable: true
                },
                {
                    name: "profile",
                    type: "schemes.Profile",
                    description: "User profile data"
                },
                {
                    name: "notificationsEnabled",
                    type: "bool",
                    description: "Notification toggle",
                    default: "true"
                }
            ]
        },
        {
            id: "2",
            name: "Id",
            fields: [
                {
                    name: "this",
                    type: "string",
                    description: "just UUID"
                }
            ]
        },
        {
            id: "3",
            name: "Profile",
            fields: [
                {
                    name: "age",
                    type: "int",
                    description: "Age must be between 18 and 120",
                    default: "18"
                },
                {
                    name: "addresses",
                    type: "schemes.Address[]",
                    description: "User's list of addresses",
                    default: "[]"
                }
            ]
        },
        {
            id: "4",
            name: "Address",
            fields: [
                {
                    name: "street",
                    type: "string",
                    description: "Street name and number"
                },
                {
                    name: "city",
                    type: "string",
                    description: "City of residence",
                    default: `"Unknown"`
                },
                {
                    name: "postalCode",
                    type: "string",
                    description: "Postal code format may vary by country"
                }
            ]
        }
    ];

    const generatedSchemeCode = convertScheme(schemes, "User");

    const [opened, { close, open }] = useDisclosure(false);

    const [selectedName, setSelectedName] = useState("Change name...");

    const createSchemeModalRef = useRef();

    return <>
        <h1>Auth: {isAuth ? "Yes" : "No"}</h1>
        {isAuth &&
            <>
                <h2>Header: {JSON.stringify(authHeader)}</h2>
                <h2>Credentials: {JSON.stringify(authCredentials)}</h2>
            </>
        }

        <div style={{height: "100px"}}/>

        <CodeHighlight code={generatedSchemeCode} lang={"cs"}/>

        <div style={{height: "100px"}}/>

        <CreateSchemeModal ref={createSchemeModalRef} close={close} opened={opened}
                           onApply={(x) => setSelectedName(x)}/>

        <Button onClick={() => {
            createSchemeModalRef.current.setValue(selectedName);
            open();
        }}>{selectedName}</Button>

        <div style={{height: "100px"}}/>

        <TypeSelector schemes={schemes}/>

        <div style={{height: "1000px"}}/>

    </>
}