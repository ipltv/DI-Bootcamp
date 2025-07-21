import React from 'react'

export const Article = ({ title, body }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
