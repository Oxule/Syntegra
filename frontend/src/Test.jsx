import {useAuth} from "./Auth.js";

export function Test() {
    const [isAuth, authHeader, authCredentials] = useAuth();

    return <>
        <h1>Auth: {isAuth ? "Yes" : "No"}</h1>
        {isAuth &&
            <>
                <h2>Header: {JSON.stringify(authHeader)}</h2>
                <h2>Credentials: {JSON.stringify(authCredentials)}</h2>
            </>
        }
    </>
}