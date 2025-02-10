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

    return (
        <>
            <Title ta={"center"}>{projectInfo.title}</Title>
            <Text ta={"center"} c="dimmed">{projectInfo.createdAt}</Text>
            <Text ta={"center"} size={"lg"} style={{marginBottom: "32px"}}>{projectInfo.description}</Text>
            {/*TODO: севочка, добавь кнопку редактирования тоже через dialogwindow*/}
            <Endpoints/>
        </>
    );
}
