import React from 'react'
import { memo } from 'react'

const ToDo = ({ todos }) => {
    console.log('render ToDo component...');
    return (
        <>
            <h2>TODO</h2>
            <ul>
                {
                    todos && todos.map((item, index) => { return <li key={index}>{item}</li> })
                }
            </ul>
        </>
    )
}

export default memo(ToDo)