import { useState, useEffect, createContext } from 'react'
import ThemeSwitch from './ThemeSwitch'
import ThemeContext from './ThemeContext'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
    console.log(theme);
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
      <ThemeContext value={{ theme, switchTheme }}>
        <ThemeSwitch />
      </ThemeContext>
  )
}

export default App
