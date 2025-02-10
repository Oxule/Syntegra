import {Card, Title, Text} from "@mantine/core";
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

    const endpoints = [
        {
            id: "1",
            name: "Index",
            items: [
                {
                    id: "1",
                    method: "GET",
                    route: "/test"
                },
                {
                    id: "2",
                    method: "GET",
                    route: "/",
                    description: "Index page"
                },
            ]
        },
        {
            id: "2",
            name: "User",
            items: [
                {
                    id: "3",
                    method: "POST",
                    route: "/user",
                    description: "Create new user",
                    details: {
                        request: {
                            body: "scheme.createUser"
                        }
                    }
                },
                {
                    id: "4",
                    method: "DELETE",
                    route: "/user/{id}",
                    description: lorem60,
                    details: {
                        request:{
                            query: [
                                {
                                    name: "force",
                                    type: "bool",
                                    default: "false"
                                }
                            ],
                            path: [
                                {
                                    name: "id",
                                    type: "scheme.id"
                                }
                            ]
                        }
                    }
                }
            ]
        }
    ]

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
