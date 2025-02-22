import {Card, Title, Text, Button} from "@mantine/core";

function Projects() {

    function Project({info}){
        return <a href={"/"+info.uuid}>
                <Card shadow="sm" padding="lg" radius="md" withBorder className={"projects-card button-raw"}>
                    <Title truncate="end" lineClamp={1} className={"overflow-1"}>{info.name}</Title>

                    <Text truncate="end" className={"overflow-1"}>{info.createdAt}</Text>

                    <Text lineClamp={4} size="sm" c="dimmed" className={"autoalt"}>{info.description}</Text>
            </Card>
        </a>
    }

    function AddProjectButton(){
        //TODO: севочка, прикрути ручку + dialogwindow
        return <div className={"projects-card button-raw add-button projects-card-add"}>
            Add
        </div>;
    }

    return (
        <>
            <Title order={3} style={{marginBottom: "16px"}}>My projects</Title>
            <div className={"projects-grid"}>
                <Project info={{
                    name: "some project",
                    description: "description",
                    createdAt: "09-02-2025",
                    uuid: "321"
                }}/>
                <Project info={{
                    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius iure quas. Atque consequatur cum, ea eius eligendi et eum ex exercitationem, expedita fugiat hic incidunt itaque molestiae mollitia nam nemo nisi odit officia pariatur perferendis repellendus saepe, vitae. Dolores, facilis, molestiae. Corporis eveniet excepturi magni, non reprehenderit sequi voluptate.",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius iure quas. Atque consequatur cum, ea eius eligendi et eum ex exercitationem, expedita fugiat hic incidunt itaque molestiae mollitia nam nemo nisi odit officia pariatur perferendis repellendus saepe, vitae. Dolores, facilis, molestiae. Corporis eveniet excepturi magni, non reprehenderit sequi voluptate.",
                    createdAt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius iure quas. Atque consequatur cum, ea eius eligendi et eum ex exercitationem, expedita fugiat hic incidunt itaque molestiae mollitia nam nemo nisi odit officia pariatur perferendis repellendus saepe, vitae. Dolores, facilis, molestiae. Corporis eveniet excepturi magni, non reprehenderit sequi voluptate.",
                    uuid: "123"
                }}/>
                <AddProjectButton/>
            </div>
            <Title order={3} style={{marginBottom: "16px", marginTop: "16px"}}>Invited Projects</Title>
            <div className={"projects-grid"}>
                <Project info={{
                    name: "some project",
                    description: "description",
                    createdAt: "09-02-2025",
                    uuid: "321"
                }}/>
                <Project info={{
                    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius iure quas. Atque consequatur cum, ea eius eligendi et eum ex exercitationem, expedita fugiat hic incidunt itaque molestiae mollitia nam nemo nisi odit officia pariatur perferendis repellendus saepe, vitae. Dolores, facilis, molestiae. Corporis eveniet excepturi magni, non reprehenderit sequi voluptate.",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius iure quas. Atque consequatur cum, ea eius eligendi et eum ex exercitationem, expedita fugiat hic incidunt itaque molestiae mollitia nam nemo nisi odit officia pariatur perferendis repellendus saepe, vitae. Dolores, facilis, molestiae. Corporis eveniet excepturi magni, non reprehenderit sequi voluptate.",
                    createdAt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius iure quas. Atque consequatur cum, ea eius eligendi et eum ex exercitationem, expedita fugiat hic incidunt itaque molestiae mollitia nam nemo nisi odit officia pariatur perferendis repellendus saepe, vitae. Dolores, facilis, molestiae. Corporis eveniet excepturi magni, non reprehenderit sequi voluptate.",
                    uuid: "123"
                }}/>
            </div>
        </>
    )
}

export default Projects
