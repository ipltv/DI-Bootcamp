import { type ReactNode } from 'react'

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>): ReactNode => {
    return (
        <div>
            <h2>List Component</h2>
            {items.map((item, index) => {
                return <div key={index}>{renderItem(item)}</div>
            })}
        </div>
    )
}

export default List