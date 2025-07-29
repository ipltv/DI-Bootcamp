import './App.css'
import CategorySelector from './feature/tasks/CategorySelector'
import TaskList from './feature/tasks/TaskList'

function App() {

  return (
    <>
      <h1>Productivity Tracker</h1>
      <CategorySelector />
      <TaskList />
    </>
  )
}

export default App
