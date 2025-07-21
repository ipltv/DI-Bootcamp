import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Article from './components/Article'
import Counter from './components/Counter'
// import articles from './posts.json'
import { Title } from './components/Title'
import { Users } from './components/Users'

function App() {
  const [articles, setArticles] = useState();
  const [count, setCount] = useState(10);


  const handleClick = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles([...data]);
      console.log(articles);
    } catch (error) {
      console.log(error);
    }
  }

  const hanleChange = () => {
    console.log('change');

  }

  return (
    <>
      <h2>Events / Re-Render / Side Effects</h2>
      <Counter count={count} setCount={setCount}/>
      <div>
        <input onChange={hanleChange} />
        <button onClick={() => handleClick()}>Click!</button>
      </div>
      {
        articles?.map(post => {
          return <Article title={post.title} body={post.body} key={post.id} />
        })
      }
      <Title/>
      <Users/>
    </>
  )
}

export default App
