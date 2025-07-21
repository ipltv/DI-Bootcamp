import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Articles } from './components/Articles'
import Helper from './components/Helper'
import HelperClass from './components/HelperClass'
import ArticlesClass from './components/ArticlesClass'

function App() {
  const [id, setAppId] = useState(0);
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.un);

  }

  const handleCheck = (e) => {
    console.log(e.target.checked);

  }

  const handleSelect = (e) => {
    console.log(e.target.value);

  }
  return (
    <>
      {/* <h2>useEfect hook / class component / Error handler / Forms</h2>
      <input onChange={(e) => setAppId(e.target.value)} type="number" max='10' min='0' placeholder='App ID...' />
      <div>
        <button onClick={() => setShow(!show)}>{show ? 'Remove articles' : "Show articles"}</button>
      </div>
      {show ? <Articles id={id}/> : null} */}
      <Helper />
      <HelperClass />
      <ArticlesClass />

      <form onSubmit={handleSubmit}>
        <input placeholder='username' name='un' onChange={(e) => setUsername(e.target.value)} /><br/>
        {username}
        <br/>
        <input type="checkbox" onChange={(e) => handleCheck(e)} value={"Yes/No"}/><br/>
        <select onChange={(e) => handleSelect(e)}>
          <option value={0}>Please select a number</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select><br/>
        <input type="submit" />
      </form>
    </>
  )
}

export default App
