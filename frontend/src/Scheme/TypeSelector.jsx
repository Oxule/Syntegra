import {Select} from "@mantine/core";
import {useRef, useState} from "react";
import {CreateSchemeModal} from "./SchemeCreation.jsx";
import {useDisclosure} from "@mantine/hooks";

export const TYPES = ["int","string","float","bool"];

export function TypeSelector({schemes}){
    const [types, setTypes] = useState([
        { value: "_createNew", label: "Create new scheme" },
        ...TYPES,
        ...schemes.map((x) => ({ value: `schemes.${x.name}`, label: x.name }))
    ]);

    function generateSybTypes() {
        const [cnew, ...rest] = types
        return [cnew,
            ...rest,
            ...rest.map(x=> {
                if(!x.label && !x.value){
                    return x+"[]"
                }
                return {value: x.value + "[]", label: x.label + "[]"}
            })]
    }

    const selectRef = useRef();
    const schemeModal = useRef();
    const [opened, { close, open }] = useDisclosure(false);

    const [value, setValue] = useState("string");

    const handleApplyNewScheme = (newScheme) => {
        const newType = { value: `schemes.${newScheme}`, label: newScheme };
        setTypes((prev) => [...prev, newType]);
        setValue((prev)=> newType.value);
        close();
    };

    return <>
        <CreateSchemeModal ref={schemeModal} opened={opened} close={close} onApply={handleApplyNewScheme}/>
        <Select
        label="Field type"
        placeholder="string"
        data={generateSybTypes()}
        allowDeselect={false}
        searchable
        nothingFoundMessage="Nothing found..."
        ref={selectRef}
        value={value}
        onChange={(x)=>{
            if(x==="_createNew"){
                open()
            }
            else {
                setValue(x)
            }
        }}
        />
    </>
}