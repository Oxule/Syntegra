import {Title, Text} from "@mantine/core";
import {useParams} from "react-router";
import {Endpoints} from "./Endpoints.jsx";

export function Project() {

    const { id } = useParams();

    const projectInfo = {
        title: "Some project "+id,
        description: "lorem blablabla\nit's name is "+id,
        createdAt: "10.02.2025 11:21"
    }

    const lorem30 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis cumque deleniti dolore earum, eius illo iste iure, officiis placeat quas quisquam quo ratione repellat reprehenderit saepe sequi, temporibus voluptate!";
    const lorem60 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum et expedita minima nam necessitatibus nulla quos voluptatibus? Accusantium assumenda aut cumque debitis delectus eligendi eveniet explicabo facere hic illum ipsum minus modi nam neque obcaecati placeat, quia reprehenderit repudiandae saepe similique suscipit tempora tenetur ut veniam voluptatibus. Aspernatur est id incidunt magnam nobis pariatur quaerat sequi sint voluptate voluptatum.";

    const schemes = [
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
                    type: "number",
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
                    type: "array",
                    description: "List of products with their quantities",
                    items: {
                        type: "object",
                        fields: [
                            { name: "productId", type: "schemes.Id" },
                            { name: "quantity", type: "int" }
                        ]
                    }
                },
                {
                    name: "totalAmount",
                    type: "number",
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

    const endpoints = [
        {
            id: "1",
            name: "Product",
            items: [
                {
                    id: "1",
                    method: "GET",
                    route: "/products",
                    description: "Retrieve a list of all products",
                    responses: [
                        { code: 200, description: "Successful response", body: "array of scheme.Product" },
                        { code: 400 }
                    ]
                },
                {
                    id: "2",
                    method: "GET",
                    route: "/products/{id}",
                    description: "Get detailed information about a specific product",
                    details: {
                        request: {
                            path: [
                                { name: "id", type: "schemes.Id" }
                            ]
                        }
                    },
                    responses: [
                        { code: 200, description: "Successful response", body: "scheme.Product" },
                        { code: 400 },
                        { code: 404, description: "Product not found" }
                    ]
                },
                {
                    id: "3",
                    method: "POST",
                    route: "/products",
                    description: "Create a new product",
                    details: {
                        request: {
                            body: "scheme.Product"
                        }
                    },
                    responses: [
                        { code: 201, description: "Product created successfully" },
                        { code: 400 }
                    ]
                },
                {
                    id: "4",
                    method: "DELETE",
                    route: "/products/{id}",
                    description: "Delete a specific product",
                    details: {
                        request: {
                            path: [
                                { name: "id", type: "schemes.Id" }
                            ]
                        }
                    },
                    responses: [
                        { code: 200, description: "Product deleted successfully" },
                        { code: 400 },
                        { code: 404, description: "Product not found" }
                    ]
                }
            ]
        },
        {
            id: "2",
            name: "Order",
            items: [
                {
                    id: "5",
                    method: "POST",
                    route: "/orders",
                    description: "Place a new order",
                    details: {
                        request: {
                            body: "scheme.Order"
                        }
                    },
                    responses: [
                        { code: 201, description: "Order placed successfully" },
                        { code: 400 }
                    ]
                },
                {
                    id: "6",
                    method: "GET",
                    route: "/orders/{id}",
                    description: "Retrieve order details by ID",
                    details: {
                        request: {
                            path: [
                                { name: "id", type: "schemes.Id" }
                            ]
                        }
                    },
                    responses: [
                        { code: 200, description: "Successful response", body: "scheme.Order" },
                        { code: 400 },
                        { code: 404, description: "Order not found" }
                    ]
                }
            ]
        },
        {
            id: "3",
            name: "User",
            items: [
                {
                    id: "7",
                    method: "POST",
                    route: "/users",
                    description: "Create a new user",
                    details: {
                        request: {
                            body: "scheme.User"
                        }
                    },
                    responses: [
                        { code: 201, description: "User created successfully" },
                        { code: 400 }
                    ]
                },
                {
                    id: "8",
                    method: "GET",
                    route: "/users/{id}",
                    description: "Retrieve user information by ID",
                    details: {
                        request: {
                            path: [
                                { name: "id", type: "schemes.Id" }
                            ]
                        }
                    },
                    responses: [
                        { code: 200, description: "Successful response", body: "scheme.User" },
                        { code: 400 },
                        { code: 404, description: "User not found" }
                    ]
                }
            ]
        }
    ];


    return (
        <>
            <Title ta={"center"}>{projectInfo.title}</Title>
            <Text ta={"center"} c="dimmed">{projectInfo.createdAt}</Text>
            <Text ta={"center"} size={"lg"} style={{marginBottom: "32px"}}>{projectInfo.description}</Text>
            {/*TODO: севочка, добавь кнопку редактирования тоже через dialogwindow*/}
            <Endpoints endpoints={endpoints} schemes={schemes}/>
        </>
    );
}
