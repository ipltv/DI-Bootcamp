import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const ThemeSwitch = () => {
    const { theme, switchTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={switchTheme}>Switch Theme</button>
        </div>
    )
}

export default ThemeSwitch
