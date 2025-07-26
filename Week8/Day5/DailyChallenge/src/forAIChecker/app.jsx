// DailyChallenge: Planner Application


//This is main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

//This is app.jsx
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

//This is components/AddTask.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/reducer';

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.planner.selectedDate);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;

        dispatch(
            addTask({
                date: selectedDate,
                task: {
                    text: trimmed,
                    completed: false,
                },
            })
        );

        setText('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '1em' }}>
            <input
                type="text"
                placeholder="Enter new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTask;

//This is components/Calendar.jsx
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../redux/reducer';

export const Calendar = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.selectedDate)

    const handleDateChange = (dateObj) => {
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        const localDate = `${day}-${month}-${year}`;
        dispatch(setSelectedDate(localDate));
    };
    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date) => handleDateChange(date)}
            dateFormat="dd-MM-yyyy"
            inline
            className='calendar'
        />
    );
};

export default Calendar

//This is components/Tasklist.jsx
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/reducer';
import { useState } from 'react';

const TaskList = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.planner.selectedDate);
  const rawTasks = useSelector((state) => state.planner.tasksByDate[state.planner.selectedDate]);
  const tasks = rawTasks || [];
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  const submitEdit = (taskId) => {
    const trimmed = editingText.trim();
    if (trimmed) {
      dispatch(editTask({ date: selectedDate, taskId, newText: trimmed }));
    }
    setEditingId(null);
    setEditingText('');
  };

  return (
    <div className='task-list'>
      <h2>Tasks for {selectedDate}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                dispatch(toggleTask({ date: selectedDate, taskId: task.id }))
              }
            />
            {editingId === task.id ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => submitEdit(task.id)}>💾</button>
                <button onClick={() => setEditingId(null)}>❌</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                <button onClick={() => startEdit(task)}>✏️</button>
                <button onClick={() =>
                  dispatch(deleteTask({ date: selectedDate, taskId: task.id }))
                }>🗑</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

//This is redux/reducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedDate: new Date().toISOString().slice(0, 10),
    tasksByDate: {},
};

const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers: {
        setSelectedDate(state, action) {
            console.log(`reducer setSelectedDate => state.selectedDate: ${state.selectedDate}; payload: ${action.payload}`);
            state.selectedDate = action.payload;
        },
        addTask(state, action) {
            const { date, task } = action.payload;
            if (!state.tasksByDate[date]) {
                state.tasksByDate[date] = [];
            }
            state.tasksByDate[date].push({ ...task, id: Date.now() });
        },
        editTask(state, action) {
            const { date, taskId, updatedText } = action.payload;
            const task = state.tasksByDate[date]?.find(t => t.id === taskId);
            if (task) task.text = updatedText;
        },
        deleteTask(state, action) {
            const { date, taskId } = action.payload;
            state.tasksByDate[date] = state.tasksByDate[date]?.filter(t => t.id !== taskId);
        },
        toggleTask(state, action) {
            const { date, taskId } = action.payload;
            const task = state.tasksByDate[date]?.find(t => t.id === taskId);
            if (task) task.completed = !task.completed;
        },
    },
});

export const { setSelectedDate, addTask, editTask, deleteTask, toggleTask } = plannerSlice.actions;
export default plannerSlice.reducer;

//This is redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import planerReducer from './reducer'

const store = configureStore ({reducer: {planner: planerReducer}});
export default store;


//This is app.css
/* Main wrapper */
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  color: #333;
}

h1 {
  text-align: center;
  margin-top: 1rem;
  color: #444;
}

/* Planner container */
.planner-container {
  max-width: 600px;
  margin: 2rem auto;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

/* Calendar */
.calendar {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

/* Task list */
.task-list ul {
  list-style: none;
  padding: 0;
}

.task-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
  padding: 0.5rem;
  background-color: #f1f3f5;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.task-list li:hover {
  background-color: #e9ecef;
}

.task-list li span {
  flex-grow: 1;
  margin-left: 0.5rem;
}

.task-list li input[type="checkbox"] {
  margin-right: 0.6rem;
}

/* Action buttons */
.task-list button {
  margin-left: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: color 0.2s;
}

.task-list button:hover {
  color: #e03131;
}

/* Add task input */
form {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

form input[type="text"] {
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 0.5rem;
  font-size: 1rem;
}

form button {
  padding: 0.5rem 1rem;
  background-color: #339af0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

form button:hover {
  background-color: #1c7ed6;
}

/* Edit mode styling */
.task-list input[type="text"]:disabled {
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: 1rem;
}
