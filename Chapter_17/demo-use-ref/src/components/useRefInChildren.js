import {useEffect, useRef} from "react";
import InputComponent from "./InputComponent";

const UseRefInChildren = () => {
    const inputRef = useRef(null);
    useEffect(() => {
       console.log('input-ref-in-children: ', inputRef.current);
    }, []);

    return (
        <>
            <InputComponent name={'123'} ref={inputRef} />
        </>
    )
}

export default UseRefInChildren;