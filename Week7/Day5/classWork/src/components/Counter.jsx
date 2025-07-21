import { useState } from "react";

/**
 * 
 * @returns [state, setState] = useState()
 */

const Counter = ({count, setCount}) => {
    // let count = 11;
    // const [count, setCount] = useState(10);

    const add = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);

    }

    const minus = () => {
        setCount(count - 1);
    }
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => add()}>+</button>
            <button onClick={() => minus()}>-</button>
        </>
    )
}

export default Counter;