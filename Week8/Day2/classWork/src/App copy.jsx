import { useState } from 'react'
import './App.css'
import { Child } from './components/Child'
import { Parent } from './components/Parent'
import { Counter } from './components/Counter'
import ErrorBoudary from './Helpers/ErrorBoudary'

function App() {

  return (
    <>
      <h2>Children / Error Boundary / Routering</h2>
      <ErrorBoudary fallback="Something went wrong on Top Counter">
        <Counter />
      </ErrorBoudary>
      
      <Parent admin='ziv'>
        <h2>Admin panel</h2>
        <Child />
      </Parent>
      <Counter />

    </>
  )
}

export default App
