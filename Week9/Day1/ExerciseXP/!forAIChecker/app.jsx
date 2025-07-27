// 🌟 Exercise 1: Basic Todo List with React-Redux and Redux Toolkit


//this is a main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

//this is a App.jsx
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

//This is app/store.js
import { configureStore } from "@reduxjs/toolkit";
import  toDoListReducer from '../features/todos/todoSlice.js';

const store = configureStore({ reducer: toDoListReducer });

export default store;

//This is features/todos/todoSlice.js
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
            state.selectedDate = action.payload;
            console.log(`setSelectedDate => ${action.payload}`)
        },
        addTask(state, action) {
            const { date, task } = action.payload;
            if (!state.tasksByDate[date]) {
                state.tasksByDate[date] = [];
            }
            state.tasksByDate[date].push({ ...task, id: Date.now(), completed: false });
            console.log(`addTask => ${task}`);
        },
        editTask(state, action) {
            const { date, taskId, updatedText } = action.payload;
            const task = state.tasksByDate[date]?.find(t => t.id === taskId);
            if (task) task.text = updatedText;
        },
        deleteTask(state, action) {
            const { date, taskId } = action.payload;
            state.tasksByDate[date] = state.tasksByDate[date]?.filter(t => t.id !== taskId);
            console.log(`deleteTask => ${taskId}`);

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

//This is features/todos/TodoItem.jsx
import { useState, useEffect } from "react";

export const TodoItem = ({ task, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(task.text);

    const handleSave = () => {
        onEdit(value);
        setIsEditing(false);
    };

    //For handling outside changes 
    useEffect(() => {
        setValue(task.text);
    }, [task.text]);

    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={onToggle}
            />
            {isEditing ? (
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            ) : (
                <span>{task.text}</span>
            )}
            {isEditing ? (
                <button onClick={handleSave}>💾</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>✏️</button>
            )}
            <button onClick={onDelete}>❌</button>
        </li>
    );
};

export default TodoItem;

//This is features/todos/TodoList.jsx
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { toggleTask, deleteTask, editTask } from './todoSlice'

const TodoList = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.selectedDate)
    const tasks = useSelector((state) => state.tasksByDate[selectedDate]);

    return (
        <>
            <h2>Tasks for {selectedDate}</h2>
            {(!tasks || tasks.length === 0) && <p>No tasks for this day.</p>}
            <ul>
                {tasks?.map(item =>
                (
                    <TodoItem
                        key={item.id}
                        task={item}
                        onToggle={() => dispatch(toggleTask({ date: selectedDate, taskId: item.id }))}
                        onDelete={() => dispatch(deleteTask({ date: selectedDate, taskId: item.id }))}
                        onEdit={(newText) => dispatch(editTask({ date: selectedDate, taskId: item.id, updatedText: newText }))} />
                )
                )}
            </ul>
        </>
    )
}

export default TodoList

//This is features/todos/Calendar.jsx
import { useDispatch } from 'react-redux';
import { setSelectedDate } from './todoSlice';
import { useRef } from 'react';

export const Calendar = () => {
  const dispatch = useDispatch();
  const date = useRef();

  const handleChange = () => {
    dispatch(setSelectedDate(date.current.value));
  };

  return (
    <input type='date' ref={date} onChange={handleChange} value={new Date().toISOString().slice(0, 10)}/>
  );
};

export default Calendar;