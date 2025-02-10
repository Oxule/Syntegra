import {ReactNode} from "react";
import {Divider} from "@mantine/core";

export function RenderSeparated(components: ReactNode[], divider: ReactNode){
    return components.map((x,i)=><>
        {x}
        {i != components.length-1 && <Divider my="sm" />}
    </>);
}