import Calendar from './components/Calendar'
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css'

function App() {


  return (
    <div className='planner-container'>
      <h1>Nils Cat Daily Planner</h1>
      <Calendar />
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
