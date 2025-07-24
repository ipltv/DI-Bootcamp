import { useState, useReducer } from 'react'
import './App.css'

function reducerFunction(action) {
switch (action.type) {
  case value:
    
    break;

  default:
    break;
}}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducerFunction, initialState)
  return (
    <>
      <h2>useReducer hook</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h2>usereducer Hook counter</h2>
      </div>
    </>
  )
}

export default App
