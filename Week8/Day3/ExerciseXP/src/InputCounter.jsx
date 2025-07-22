import { useState } from 'react';
import { useRef } from 'react';

const InputCounter = () => {
    const [length, setLength] = useState();
    const inputRef = useRef(null);
    const handlerTyping = (e) => {
        setLength(inputRef.current.value.length);
    }

    return (
        <div>
            <input ref={inputRef} onChange={handlerTyping} type ="text" />
            <p>Length: {length}</p>
        </div>
    )
}

export default InputCounter