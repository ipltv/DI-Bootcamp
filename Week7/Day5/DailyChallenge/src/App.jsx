import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ])

  const handleVote = (index) => {
    languages[index].votes++;
    setLanguages([...languages]);
  }

  return (
    <>
      <h1>Vote Your Language!</h1>
      {languages?.map((item, index) => {
        return (
          <div key={index} className='lanBlock'>
            <span>{item.votes}</span>
            <span>{item.name}</span>
            <button onClick={() => handleVote(index)}>Click Here</button>
          </div>
        );
      })
      }
    </>
  )
}

export default App
