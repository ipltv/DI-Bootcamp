import React from 'react'

export const Parent = (props) => {
    console.log(props);
    if (props.children && props.admin === 'jhon'){
        return props.children
    }

    return (
        <>
            <h2>Parent Components</h2>
        </>
    )
}
