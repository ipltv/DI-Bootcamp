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


import { useState, type ReactNode } from 'react'


const Counter = (): ReactNode => {
    const [counter, setCounter] = useState<number>(0);
    const [lastAction, setLastAction] = useState<string>('');

    return (
        <div>
            <h2>Counter Component</h2>
            <p>{counter}</p>
            <button onClick={() => {setCounter(counter+1); setLastAction("increment")}}>+</button>
            <button onClick={() => {setCounter(counter-1); setLastAction("decrement")}}>-</button>
            <p>{lastAction ? "Last counter action was " + lastAction : ""}</p>
        </div>
    )
}

export default Counter


import React, { type ReactNode } from 'react'

interface GreetingProps {
    name: string;
    messageCount: number;
}

const Greeting = ({ name, messageCount }: GreetingProps): ReactNode => {
    return (
        <div className='userContainer'>
            <h2>Greeting, {name}</h2>
            <p>You have {messageCount} {messageCount === 0 ? "message" : "messages"}</p>
        </div>
    )
}

export default Greeting

import { useEffect, useState, type ReactNode } from 'react'
import axios from 'axios'

interface User {
    id: number;
    name: string;
    username: string;
}

const UserList = (): ReactNode => {
    const [users, setUsers] = useState<User[] | null>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
                console.log('response =>', response);
                setUsers(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError(error.message);
                } else {
                    setError("An unexpected error occured.");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return <div>Loading users...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>UserList Component</h2>
            {users && users?.length > 0 ? (
                users.map((user) => (
                    <div key={user.id}>
                        <p><strong>ID:</strong>{user.id}</p>
                        <p><strong>Name:</strong>{user.name}</p>
                        <p><strong>username:</strong>{user.username}</p>
                    </div>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>

    )
}

export default UserList

import React, { type ReactNode } from 'react'

interface UserCardProps {
    name?: string,
    age?: number,
    role?: string,
}

const UserCard = ({name='John Doe', age=1, role="GenAi Engeneer"}: UserCardProps): ReactNode => {
  return (
    <div>
        <h2>UserCard Component</h2>
        <p>Name: {name}, Age: {age}, Role: {role}</p>
    </div>
  )
}

export default UserCard