import './App.css'
import {
  useState, useRef, useMemo, useCallback, useEffect,
  type ChangeEvent, type MouseEvent, type KeyboardEvent,
  createContext
} from 'react'
import Heading from './components/Heading'
import List from './components/List'
import Section from './components/Section'

type User = {
  id: number;
  username: string;
}

interface Auth {
  token: string;
  userid: string;
}

export const AuthContext = createContext<Auth | null>(null);

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUser] = useState<User[] | null>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const strRef = useRef<string>('john');

  const heavyTask = (): number => 100;

  const result = useMemo<number>(() => heavyTask(), [])

  const testFunc = useCallback((): User[] => {
    return [{ id: 1, username: 'abc' }];
  }, []);

  useEffect((): void => {
    console.log('unmount');
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);
  }

  function handleClick(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void {
    console.log(event);

  }

  return (
    <>
      <h2>React + TypeScript</h2>
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>

      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={handleClick}>Click</button>
      {/* <Heading title={'Earthquake strike Russia'} subtitle={'Tsunami warning for Hawaii, Japan.'} />
      <Section place={"Japan, Hawaii"}>
        <h2>Don't go to the beach, or you will die from a tsunami wave.</h2>
      </Section>
      <List items={[1, 2, 3]} /> */}
    </>
  )
}

export default App
