import {useState} from "react";
import {TypeSelector} from "./Scheme/TypeSelector.jsx";
import {convertScheme} from "./Scheme/SchemeLangGeneration.js";
import {CodeHighlight} from "@mantine/code-highlight";

export function SchemesTest() {

    const schemesInit = [
        {
            id: "1",
            name: "Product",
            fields: [
                {
                    name: "id",
                    type: "schemes.Id",
                    description: "Unique identifier for the product"
                },
                {
                    name: "name",
                    type: "string",
                    description: "Product name, length [3-128]"
                },
                {
                    name: "description",
                    type: "string",
                    description: "Detailed product description, max length 512"
                },
                {
                    name: "price",
                    type: "float",
                    description: "Product price, must be a positive value"
                },
                {
                    name: "stock",
                    type: "int",
                    description: "Available quantity in stock"
                }
            ]
        },
        {
            id: "2",
            name: "Order",
            description: "This type is just a regular order in this shop",
            fields: [
                {
                    name: "id",
                    type: "schemes.Id",
                    description: "Order unique identifier"
                },
                {
                    name: "userId",
                    type: "schemes.Id",
                    description: "ID of the user placing the order"
                },
                {
                    name: "products",
                    type: "schemes.Id[]",
                    description: "List of products",
                },
                {
                    name: "totalAmount",
                    type: "float",
                    description: "Total order cost"
                },
                {
                    name: "status",
                    type: "string",
                    description: "Order status (e.g., 'Pending', 'Shipped', 'Delivered')"
                }
            ]
        },
        {
            id: "3",
            name: "User",
            fields: [
                {
                    name: "id",
                    type: "schemes.Id",
                    description: "Unique user identifier"
                },
                {
                    name: "name",
                    type: "string",
                    description: "User's full name, length [3-64]"
                },
                {
                    name: "email",
                    type: "string",
                    description: "User's email address"
                },
                {
                    name: "password",
                    type: "string",
                    description: "Password, length [8-64] with special regex"
                }
            ]
        },
        {
            id: "4",
            name: "Id",
            fields: [
                {
                    name: "this",
                    type: "string",
                    description: "Unique identifier as UUID"
                }
            ]
        }
    ];

    const [schemes, setSchemes] = useState(schemesInit);

    const [scheme, setScheme] = useState("string");

    const code = convertScheme(schemes, scheme.startsWith("schemes.")?scheme.substring("schemes.".length, scheme.length):scheme)

    return <>
        <TypeSelector schemes={schemes} setSchemes={setSchemes} onChange={x=>setScheme(x)}/>
        <div style={{height: "64px"}}/>
        <CodeHighlight code={code} lang={"cs"}/>
    </>
}