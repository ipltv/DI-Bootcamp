import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link> |
                <Link to='/shop'>Shop</Link> |
                <Link to='/game'>Game</Link>
            </nav>
        </header >
    )
}

export default Nav