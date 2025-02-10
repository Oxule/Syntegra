import {Button, Container, Paper, PasswordInput, TextInput, Title} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useLogin} from "./Auth.js";
import {useNavigate} from "react-router";

function Login() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            username: '',
            password: '',
        }
    });

    const login = useLogin();

    const navigate = useNavigate();

    const submitForm = (values) => {
        //TODO: севочка, миша уже скинул ручки, приделай логин. надо будет выводить попап есль ошибка/неверные данные
        console.log(values)

        login("test", new Date(Date.now() + (4*60*60*1000)), {name: "Test"});
        navigate("/");
    }

    return (
        <form onSubmit={form.onSubmit(submitForm)}>
            <Container size={420} my={40}>
                <Title ta="center">
                    Welcome back!
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Username" placeholder="Your username" required key={form.key('username')}
                               {...form.getInputProps('username')}/>
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" key={form.key('password')}
                                   {...form.getInputProps('password')}/>
                    <Button type="submit" fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
            </Container>
        </form>
    )
}

export default Login
