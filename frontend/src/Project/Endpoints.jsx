import {Accordion, Badge, Divider, Flex, Text, Title} from "@mantine/core";
import {RenderSeparated} from "../Utils.js";

export function Endpoints({endpoints}) {

    return <Accordion variant="separated" multiple={true}>
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

        <Accordion.Panel>
            <EndpointInfo info={info}/>
        </Accordion.Panel>
    </Accordion.Item>;
}

function EndpointInfo({info}){

    function EndpointRequest({request}){
        const content = [];

        if(!request){
            return <Text c="dimmed">Empty request</Text>
        }

        if(request.query && request.query.length != 0){
            content.push(<>
                <Title order={3}>Query parameters</Title>
                {RenderSeparated(
                    request.query.map((x,i)=>(
                        <div key={i}>
                            <Flex direction={"row"} wrap={"wrap"} justify={"start"} gap={"min(max(64px, 25%), 160px)"}>
                                <Text size={"lg"}>{x.name}</Text>
                                <Text size={"lg"}>{x.name}</Text>
                            </Flex>
                        </div>
                    )),
                    <Divider my="sm"/>
                )}
            </>);
        }

        if(content.length == 0){
            return <Text c="dimmed">Empty request</Text>
        }

        return RenderSeparated(content, <Divider my="md"/>)
    }

    return <>
        {info.description && <Text size={"lg"} style={{marginBottom: "16px"}}>{info.description}</Text>}
        <Divider my="md" />
        <Title order={1}>Request</Title>
        <EndpointRequest request={info.details && info.details.request}/>
        <Divider my="md" />
    </>
}