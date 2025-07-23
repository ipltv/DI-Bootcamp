import { useState } from 'react'
import './App.css'
import quotes from './assets/QuotesDatabase'

const themes = [
  { backgroundColor: '#1a1a40', color: '#1a1a40' },
  { backgroundColor: '#c62828', color: '#c62828' },
  { backgroundColor: '#2e7d32', color: '#2e7d32' }, 
  { backgroundColor: '#283593', color: '#283593' }, 
  { backgroundColor: '#6a1b9a', color: '#6a1b9a' }, 
  { backgroundColor: '#f57c00', color: '#f57c00' }, 
  { backgroundColor: '#0097a7', color: '#0097a7' } 
]

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function getRandomTheme() {
  return themes[Math.floor(Math.random() * themes.length)]
}

function App() {
  const [currentQuote, setQuote] = useState(getRandomQuote);
  const [theme, setTheme] = useState(getRandomTheme);


  const handlerNewQuote = () => {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote.quote === currentQuote.quote)
    setQuote(getRandomQuote);
    setTheme(getRandomTheme);
  }

  return (
    <div
      id="cover"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <div id="quoteContainer">

        <p style={{color: theme.color}}>{currentQuote.quote}</p>
        <i style={{color: theme.color}}>-- {currentQuote.author} --</i>
        <button
          onClick={handlerNewQuote}
          style={{
            backgroundColor: theme.backgroundColor
          }}>New quote
        </button>

      </div>

    </div>
  )
}

export default App
