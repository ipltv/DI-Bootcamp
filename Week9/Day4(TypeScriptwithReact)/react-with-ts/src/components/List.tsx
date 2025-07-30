import React, { type ReactElement, type ReactNode } from 'react'

type ListProps<T> = {
    items: T[];
}

const List = <T,>({ items }: ListProps<T>): ReactElement => {
    return (
        <>
            <h2>List of Generic Items</h2>
            {
                items && items.map((item, index) => {
                    return <div key={index}>{item as ReactNode}</div>
                })
            }
        </>
    )
}

export default List