import React, { type ReactNode } from 'react'

interface GreetingProps {
    name: string;
    messageCount: number;
}

const Greeting = ({ name, messageCount }: GreetingProps): ReactNode => {
    return (
        <div className='userContainer'>
            <h2>Greeting, {name}</h2>
            <p>You have {messageCount} {messageCount === 0 ? "message" : "messages"}</p>
        </div>
    )
}

export default Greeting