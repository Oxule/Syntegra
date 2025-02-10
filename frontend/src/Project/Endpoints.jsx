import {Accordion, Badge, Text, Title} from "@mantine/core";

export function Endpoints() {

    const endpoints = [
        {
            id: "1",
            name: "Index",
            items: [
                {
                    id: "1",
                    method: "GET",
                    route: "/test",
                },
                {
                    id: "2",
                    method: "GET",
                    route: "/",
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
                },
                {
                    id: "4",
                    method: "DELETE",
                    route: "/long/long/long/long/long/long/long/path",
                }
            ]
        }
    ]

    return <Accordion variant="separated">
        {endpoints.map(x=><>
            <Title style={{marginTop: "24px",marginBottom: "12px"}}>{x.name}</Title>
            {x.items.map(y=><Endpoint info={y}/>)}
        </>)}
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