import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import UserList from './components/UserList'

function App() {

  return (
    <>
      <Greeting name={"Jhon"} messageCount={0} />
      <Counter />
      <UserCard />
      <UserCard name={'Vesta'} age={5} />
      <UserCard name={'Nils'} age={10} role="Cat" />
      <UserList />
    </>
  )
}

export default App
