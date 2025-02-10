import {Accordion, Badge, Divider, Flex, Text, Title} from "@mantine/core";
import {RenderSeparated} from "../Utils.js";

export function Endpoints({endpoints, schemes}) {

    function Endpoint({info}) {
        function EndpointInfo(){

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

            function EndpointResponses({responses}){
                const content = [];

                if(!responses){
                    return <Text c="dimmed">No responses</Text>
                }

                if(responses.query && responses.query.length != 0){
                    content.push(<>
                        <Title order={3}>Query parameters</Title>
                        {RenderSeparated(
                            responses.query.map((x,i)=><div>Test</div>),
                            <Divider my="sm"/>
                        )}
                    </>);
                }

                if(content.length == 0){
                    return <Text c="dimmed">No responses</Text>
                }

                return RenderSeparated(content, <Divider my="md"/>)
            }


            return <>
                {info.description && <Text size={"lg"} style={{marginBottom: "16px"}}>{info.description}</Text>}
                <Divider my="md" />
                <Title order={1}>Request</Title>
                <EndpointRequest request={info.details && info.details.request}/>
                <Divider my="md" />
                <Title order={1}>Responses</Title>
                <EndpointResponses responses={info.details && info.details.response}/>
            </>
        }

        function getColor(method){
            switch(method) {
                case "GET":
                    return "blue";
                case "POST":
                    return "green";
                case "PUT":
                    return "orange";
                case "PATCH":
                    return "orange";
                case "DELETE":
                    return "red";
                default:
                    return "blue";
            }
        }

        return <Accordion.Item key={info.id} value={info.id}>
            <Accordion.Control>
                <Badge size={"xl"} radius={"md"} style={{display: "inline"}} color={getColor(info.method)}>{info.method}</Badge><Text style={{display: "inline", marginLeft: "12px"}} size={"xl"}>{info.route}</Text>
            </Accordion.Control>

            <Accordion.Panel>
                <EndpointInfo/>
            </Accordion.Panel>
        </Accordion.Item>;
    }



    return <Accordion variant="separated" multiple={true}>
        {endpoints.map(x=><>
            <Title style={{marginTop: "24px",marginBottom: "12px"}}>{x.name}</Title>
            {x.items.map(y=><Endpoint info={y}/>)}
        </>)}
    </Accordion>;
}