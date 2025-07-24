// Exercise 1: Basic Todo List with React-Redux

//This is app.jsx code

import { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDo />
    </>
  )
}

export default App

//This is ToDo.jsx code
import { addTodo, deleteTodo, completeTodo } from '../redux/actions';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const ToDo = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);    

    return (
        <>
            <input ref={inputRef} type="text" name='taskInput' />
            <button onClick={() => { dispatch(addTodo(inputRef.current.value.trim())) }}>Add Task</button>
            <ul>
                {tasks.map(item =>
                (
                    <li key={item.id}>
                        <input type='checkbox' checked={item.isCompleted} onChange={() => dispatch(completeTodo(item.id))} />
                        <input type="text" value={item.text} disabled={true} />
                        <button onClick={() => dispatch(deleteTodo(item.id))}>❌</button>
                    </li>
                )
                )}
            </ul>
        </>
    )
}

export default ToDo

//This is redux/actions.js code
export const ACTION_ADD_TASK = 'ADD_TASK'
export const ACTION_DELETE_TASK = 'DELETE_TASK'
export const ACTION_TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export const addTodo = (text) => {
    return {
        type: ACTION_ADD_TASK,
        payload: text,
    };
};

export const deleteTodo = (taskId) => {
    return {
        type: ACTION_DELETE_TASK,
        id: taskId,
    };
};


export const completeTodo = (taskId) => {
    return {
        type: ACTION_TOGGLE_COMPLETE,
        id: taskId,
    };
};

//This is redux/reducers.js code
import { ACTION_ADD_TASK, ACTION_DELETE_TASK, ACTION_TOGGLE_COMPLETE } from "./actions";

const initialState = { tasks: [] };

export function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_ADD_TASK:
            const newTask = {id: Date.now(), text: action.payload, isCompleted: false}
            return {...state, tasks: [...state.tasks, newTask]};
        case ACTION_DELETE_TASK:
            return {...state, tasks: state.tasks.filter(item => item.id !== action.id)};
        case ACTION_TOGGLE_COMPLETE:
            return {...state, tasks: state.tasks.map(item => item.id === action.id ? {...item, isCompleted:!item.isCompleted} : item)};
        default:
            return state;
    }
}

//This is redux/store.js code
import { configureStore } from "@reduxjs/toolkit";
import { toDoListReducer } from './reducers.js';


const store = configureStore({ reducer: toDoListReducer });
console.log(store.getState());

export default store;
