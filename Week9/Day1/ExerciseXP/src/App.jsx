import './App.css'
import Calendar from './features/todos/Calendar';
import TodoList from './features/todos/TodoList';
import AddTodo from './features/todos/AddTodo';

function App() {

  return (
    <> 
      <Calendar />
      <AddTodo />
      <TodoList />
    </>
  )
}

export default App
