import { useState, useCallback, useMemo } from 'react'
import './App.css'
import ToDo from './ToDo'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);

  // const addTask = () => {
  //   setTodos(task => [...todos, 'new task ' + (todos.length + 1)]);
  // }

  const heavyTask = (num = 0) => {
    for (let i = 0; i < 1000000000; i++) {
      num++;
    }
    return num;
  }
  // const result = heavyTask()
  // console.log(result);

  const result = useMemo(() => {
    const result = heavyTask(count);
    console.log("result useMemo => ", result);
    return result;
  }, [])

  const addTask = useCallback(() => {
    setTodos(task => [...todos, 'new task ' + (todos.length + 1)]);
  }, []);

  return (
    <>
      <h2>memo + useMemo + useCallback</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* <button onClick={addTask}>Add Task</button> */}
      <ToDo todos={todos} addTask={addTask} />
    </>
  )
}

export default App
