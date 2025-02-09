import {useEffect} from "react";

export function AutoAlt() {
    useEffect(() => {
        const nodes = document.querySelectorAll('.overflow-1,.autoalt');
        nodes.forEach(node => {
            if(node.className.includes("noautoalt"))
                return;
            node.title = node.textContent;
        });
    }, []);

    return null;
}