import {Accordion, Badge, Divider, Flex, Table, Text, Title} from "@mantine/core";
import {RenderSeparated} from "../Utils.js";
import {convertScheme} from "../Scheme/SchemeLangGeneration.js";
import {CodeHighlight} from "@mantine/code-highlight";

export function Endpoints({endpoints, schemes}) {

    function Endpoint({info}) {
        function EndpointInfo(){

            function DisplayBody({body}){
                let code = body;
                const prefix = "scheme.";
                if(body.startsWith(prefix))
                    code = convertScheme(schemes, body.substring(prefix.length, body.length));
                return <div style={{marginTop: "16px"}}>
                    <Title order={3} style={{marginBottom: "4px"}}>Body</Title>
                    <CodeHighlight code={code} lang={"cs"}/>
                </div>
            }

            function EndpointRequest({request}){
                const content = [];

                if(!request){
                    return <Text c="dimmed">Empty request</Text>
                }

                const parameters = [];

                if(request.query && request.query.length !== 0){
                    parameters.push(request.query.map(x=>(
                        <Table.Tr key={x.name}>
                            <Table.Td>
                                <Text size={"xl"}>{x.name} {(!x.default) && <div style={{
                                    display: "inline",
                                    color: "var(--mantine-color-red-text)",
                                    fontSize: "12px"
                                }}>REQUIRED</div>}</Text>
                            </Table.Td>
                            <Table.Td><Text size={"xl"}>{x.type}</Text></Table.Td>
                            <Table.Td><Text size={"xl"}>Query</Text></Table.Td>
                            <Table.Td><Text size={"lg"}>{x.description}</Text></Table.Td>
                        </Table.Tr>
                    )));
                }
                if(request.path && request.path.length !== 0){
                    parameters.push(request.path.map(x=>(
                        <Table.Tr key={x.name}>
                            <Table.Td>
                                <Text size={"xl"}>{x.name} <div style={{display: "inline", color: "var(--mantine-color-red-text)", fontSize: "12px"}}>REQUIRED</div></Text>
                            </Table.Td>
                            <Table.Td><Text size={"xl"}>{x.type}</Text></Table.Td>
                            <Table.Td><Text size={"xl"}>Path</Text></Table.Td>
                            <Table.Td><Text size={"lg"}>{x.description}</Text></Table.Td>
                        </Table.Tr>
                    )));
                }

                if(parameters.length !== 0){
                    content.push(<>
                        <Table>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Name</Table.Th>
                                    <Table.Th>Type</Table.Th>
                                    <Table.Th>Where</Table.Th>
                                    <Table.Th>Description</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {parameters}
                            </Table.Tbody>
                        </Table>
                    </>);
                }

                if(request.body){
                    content.push(<DisplayBody body={request.body}/>)
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