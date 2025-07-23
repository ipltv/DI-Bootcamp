import { useState } from 'react'
import './App.css'

function App() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState('addition')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const a = parseFloat(firstNumber)
    const b = parseFloat(secondNumber)

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers')
      return
    }

    let res;
    switch (operation) {
      case 'addition':
        res = a + b
        break
      case 'substraction':
        res = a - b
        break
      case 'multiplication':
        res = a * b
        break
      case 'division':
        res = b !== 0 ? a / b : 'Cannot divide by zero'
        break
      default:
        res = 'Unknown operation'
    }

    setResult(res)
  }

  return (
    <div id="cover">
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        placeholder="Second number"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="addition">Addition</option>
        <option value="substraction">Subtraction</option>
        <option value="multiplication">Multiplication</option>
        <option value="division">Division</option>
      </select>
      <button onClick={calculate}>Do It!</button>
      <p>{result !== null ? `Result: ${result}` : 'Enter numbers and choose operation'}</p>
    </div>
  )
}

export default App
