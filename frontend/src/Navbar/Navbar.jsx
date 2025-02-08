import classes from "./Navbar.module.css";
import {Anchor, Button} from "@mantine/core";

export function Navbar(){
    return <div className={classes.header}>
        <Anchor href={"/"}>Syntegra</Anchor>
        <Button variant={"light"}>Logout</Button>
    </div>
}