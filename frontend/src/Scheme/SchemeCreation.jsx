import {Button, Modal, TextInput} from "@mantine/core";
import {forwardRef, useImperativeHandle, useState} from "react";


export const CreateSchemeModal = forwardRef(CreateSchemeModalC);


function CreateSchemeModalC({opened, close, onApply}, ref){
    const [value, setValue] = useState('');

    useImperativeHandle(ref, ()=>({
        setValue
    }))

    return <Modal.Root opened={opened} onClose={close} centered>
        <Modal.Overlay />
        <Modal.Content>
            <Modal.Header>
                <Modal.Title>Change name</Modal.Title>
                <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
                <TextInput
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                />
                <Button onClick={()=> {
                    if(onApply)
                        onApply(value)
                    close();
                }}>Change name!</Button>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>
}