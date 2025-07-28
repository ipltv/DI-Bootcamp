import { useState } from 'react'
import './App.css'
import AgeControls from './features/age/AgeControls'
import AgeDisplay from './features/age/AgeDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AgeDisplay />
      <AgeControls />
    </>
  )
}

export default App
