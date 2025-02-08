import {Button, Container, Paper, PasswordInput, TextInput, Title} from "@mantine/core";
import {useForm} from "@mantine/form";

function Login() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            username: '',
            password: '',
        }
    });

    const submitForm = (values) => {
        //TODO: login action
        console.log(values)
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
