import classes from "./Navbar.module.css";
import {Anchor, Button} from "@mantine/core";
import {useAuth, useLogout} from "../Auth.js";
import {useNavigate} from "react-router";

export function Navbar(){
    const logout = useLogout();
    const [isAuth] = useAuth();
    const navigate = useNavigate();

    return <div className={classes.header}>
        <Anchor href={"/"}>Syntegra</Anchor>
        {isAuth &&
        <Button variant={"light"} onClick={()=> {
            logout();
            navigate("/login")
        }}>Logout</Button>}
    </div>
}