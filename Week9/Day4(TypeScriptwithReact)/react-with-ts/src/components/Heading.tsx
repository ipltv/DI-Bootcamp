import type { ReactNode } from 'react'
import type { HeadingProps } from '../types'

const Heading = ({ title, subtitle }: HeadingProps): ReactNode => {
    return (
        <>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </>
    )
}

export default Heading