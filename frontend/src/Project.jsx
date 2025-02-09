import {Card, Title, Text} from "@mantine/core";

export function Project() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className={"projects-card button-raw"}>
            <Title truncate="end" lineClamp={1} className={"overflow-1"}>das</Title>

            <Text truncate="end" className={"overflow-1"}>das</Text>

            <Text lineClamp={4} size="sm" c="dimmed" className={"autoalt"}>dsa</Text>
        </Card>
    );
}
