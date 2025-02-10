import {Accordion, Badge, Text} from "@mantine/core";

export function Endpoints() {

    const endpoints = [
        {
            tag: "2",
            id: "1",
            method: "GET",
            route: "/test",
        },
        {
            tag: "2",
            id: "2",
            method: "GET",
            route: "/",
        },
        {
            tag: "1",
            id: "3",
            method: "POST",
            route: "/user",
        },
        {
            tag: "1",
            id: "4",
            method: "DELETE",
            route: "/long/long/long/long/long/long/long/path",
        }
    ]

    return <Accordion variant="separated">
        {endpoints.map(x=><Endpoint info={x}/>)}
    </Accordion>;
}

function Endpoint({info}) {
    let color = "gray";
    switch(info.method) {
        case "GET":
            color = "blue";
            break;
        case "POST":
            color = "green";
            break;
        case "PUT":
            color = "orange";
            break;
        case "PATCH":
            color = "orange";
            break;
        case "DELETE":
            color = "red";
            break;
    }

    return <Accordion.Item key={info.id} value={info.id}>
        <Accordion.Control>
            <Badge size={"xl"} radius={"md"} style={{display: "inline"}} color={color}>{info.method}</Badge><Text style={{display: "inline", marginLeft: "12px"}} size={"xl"}>{info.route}</Text>
        </Accordion.Control>

        <Accordion.Panel>Some details</Accordion.Panel>
    </Accordion.Item>;
}