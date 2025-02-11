import {Select} from "@mantine/core";
import {useRef, useState} from "react";
import {CreateSchemeModal} from "./SchemeCreation.jsx";
import {useDisclosure} from "@mantine/hooks";

export const TYPES = ["int","string","float","bool"];

export function TypeSelector({schemes, setSchemes, onChange, value, ...rest}){
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

    const [valueV, setValueV] = useState(value);

    const handleApplyNewScheme = (newScheme) => {
        const newType = { value: `schemes.${newScheme}`, label: newScheme };
        setTypes((prev) => [...prev, newType]);
        setValueV((prev)=> newType.value);
        if(onChange)
            onChange(newType.value);
        close();
    };

    return <>
        <CreateSchemeModal ref={schemeModal} opened={opened} close={close}
                           onApply={x=>{
                               handleApplyNewScheme(x.name)
                               setSchemes(prev=>[...prev, x])
                               console.log(x)
                           }}
                           schemes={schemes}/>
        <Select
        label="Field type"
        size={"md"}
        placeholder="string"
        data={generateSybTypes()}
        allowDeselect={false}
        searchable
        nothingFoundMessage="Nothing found..."
        ref={selectRef}
        value={valueV}
        onChange={(x)=>{
            if(x==="_createNew"){
                open()
            }
            else {
                setValueV(x)
                if(onChange)
                    onChange(x)
            }
        }}
        {...rest}
        />
    </>
}