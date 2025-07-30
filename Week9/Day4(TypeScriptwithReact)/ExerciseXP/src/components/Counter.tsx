import { useState, type ReactNode } from 'react'


const Counter = (): ReactNode => {
    const [counter, setCounter] = useState<number>(0);
    const [lastAction, setLastAction] = useState<string>('');

    return (
        <div>
            <h2>Counter Component</h2>
            <p>{counter}</p>
            <button onClick={() => {setCounter(counter+1); setLastAction("increment")}}>+</button>
            <button onClick={() => {setCounter(counter-1); setLastAction("decrement")}}>-</button>
            <p>{lastAction ? "Last counter action was " + lastAction : ""}</p>
        </div>
    )
}

export default Counter