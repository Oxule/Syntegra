import {Button, Divider, Group, Modal, Paper, TextInput, Title} from "@mantine/core";
import {forwardRef, useImperativeHandle, useState} from "react";
import {useForm} from "@mantine/form";
import {TypeSelector} from "./TypeSelector.jsx";


export const CreateSchemeModal = forwardRef(CreateSchemeModalC);

function FieldsList({schemes, form}) {
    function Field({info, index}){

        const key = "fields."+index;

        return <>
            <Divider my="sm"/>
            <Paper withBorder shadow="md" p={16}>
                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="this"
                    size={"md"}
                    key={form.key(`${key}.name`)}
                    {...form.getInputProps(`${key}.name`)}
                />
                <div style={{height: "16px"}}/>
                <TypeSelector
                    withAsterisk
                    required
                    schemes={schemes}
                    key={form.key(`${key}.type`)}
                    {...form.getInputProps(`${key}.type`)}
                />
                <div style={{height: "16px"}}/>
                <TextInput
                    label="Description"
                    placeholder=""
                    size={"md"}
                    key={form.key(`${key}.description`)}
                    {...form.getInputProps(`${key}.description`)}
                />
                <div style={{height: "16px"}}/>
                <Button color={"red"} onClick={()=>form.removeListItem('fields', index)}>Delete</Button>
            </Paper>
        </>
    }

    const fields = form.getValues().fields.map((x,i)=><Field info={x} index={i}/>);

    return <>
        {fields}
        <Divider my="sm"/>
        <Button fullWidth onClick={()=>form.insertListItem('fields', {name: null, description: null, type: "string"})}>Add</Button>
    </>
}


function CreateSchemeModalC({opened, close, onApply, isEditing, schemes}, ref){
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            description: null,
            fields: [],
        },
        validate: {
            name: (value) => {
                if(!value || value === "")
                    return "Name is required";
                if(schemes.find(x=>x.name === value))
                    return "Scheme with the same name exists";
                return null;
            },
            //TODO: if it's possible, then check field names collisions
            fields: {
                name: (value) => (value && value !== "")?null:"Name is required",
                type: (value) => {
                    if(!value || value === "")
                        return "Type is required"
                    if(value === "_createNew")
                        return "You must create type"
                    return null;
                }
            }
        },
    });

    useImperativeHandle(ref, ()=>({
        getValues: form.getValues,
        setValues: form.setValues,
        reset: form.reset
    }))

    return <Modal.Root opened={opened} onClose={close} centered>
        <Modal.Overlay />
        <Modal.Content>
            <Modal.Header>
                <Modal.Title>
                    <Title order={2}>{isEditing?"Scheme editing":"Scheme creation "}</Title>
                </Modal.Title>
                <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(e)=>{
                    form.onSubmit((x) =>
                        {
                            //TODO: post scheme
                            if (onApply)
                                onApply(x)
                            close();
                        }
                    )(e);
                    e.stopPropagation()
                }}>
                    <TextInput
                        withAsterisk
                        label="Name"
                        placeholder="User"
                        required
                        key={form.key('name')}
                        {...form.getInputProps('name')}
                        size={"lg"}
                    />
                    <div style={{height: "16px"}}/>
                    <TextInput
                        label="Description"
                        placeholder=""
                        key={form.key('description')}
                        {...form.getInputProps('description')}
                        size={"md"}
                    />
                    <Divider my="xl"/>
                    <Title order={3}>Fields</Title>
                    <FieldsList schemes={schemes} form={form}/>
                    <Divider my="xl"/>
                    <Button type="submit" fullWidth size={"lg"}>Submit</Button>
                </form>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>
}