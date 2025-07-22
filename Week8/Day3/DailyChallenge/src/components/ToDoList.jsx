import { useRef, useState, useReducer } from 'react'
import './ToDoList.css';

const ToDoList = () => {
    const initialState = {
        tasks: [],
        filter: 'all' // 'all' | 'active' | 'completed'
    };
    const inputRef = useRef();

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TASK':
                const newTask = action.payload.trim();
                if (!newTask) return state;
                const newTaskId = Date.now();
                console.log(newTask);
                return {
                    tasks: [...state.tasks, { id: newTaskId, text: newTask, completed: false, isEditing: false, editDraft: newTask }],
                    filter: state.filter
                };
            case 'DELETE_TASK':
                return {
                    ...state,
                    tasks: state.tasks.filter(item => item.id !== action.id)
                }
            case 'START_EDIT':
                return {
                    ...state,
                    tasks: state.tasks.map(task =>
                        task.id === action.id
                            ? { ...task, isEditing: true }
                            : task
                    )
                }
            case 'UPDATE_DRAFT':
                return {
                    ...state,
                    tasks: state.tasks.map(task =>
                        task.id === action.id
                            ? { ...task, editDraft: action.payload }
                            : task
                    )
                };
            case 'SAVE_EDIT_TASK':
                return {
                    ...state,
                    tasks: state.tasks.map(task =>
                        task.id === action.id
                            ? { ...task, text: task.editDraft, isEditing: false }
                            : task
                    )
                };
            case 'TOGGLE_COMPLETE':
                return {
                    ...state,
                    tasks: state.tasks.map(task =>
                        task.id === action.id
                            ? { ...task, completed: !task.completed }
                            : task
                    )
                };
            case 'SET_FILTER':
                return {
                    ...state,
                    filter: action.payload
                };
            default:
                return state;
        }
    }

    const handlerAdd = () => {
        const inputValue = inputRef.current.value;
        dispatch({ type: 'ADD_TASK', payload: inputValue });
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    const handlerComplete = (taskId) => {
        dispatch({ type: 'TOGGLE_COMPLETE', id: taskId });
    }

    const handlerStartEdited = (taskId) => {
        dispatch({ type: 'START_EDIT', id: taskId })
    }

    const handlerUpdateEdited = (e, taskId) => {
        dispatch({ type: 'UPDATE_DRAFT', id: taskId, payload: e.target.value })
    }

    const handlerSaveEdited = (taskId) => {
        dispatch({ type: 'SAVE_EDIT_TASK', id: taskId })
    }

    const handlerDeleteTask = (taskId) => {
        dispatch({ type: 'DELETE_TASK', id: taskId })
    }

    const handlerFilter = (filterValue) => {
        dispatch({ type: 'SET_FILTER', payload: filterValue })
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const filteredTasks = state.tasks.filter(task => {
        if (state.filter === 'active') return !task.completed;
        if (state.filter === 'completed') return task.completed;
        return true;
    });
    return (
        <>
            <div id='filter-container'>
                <button onClick={() => handlerFilter('all')}>All</button>
                <button onClick={() => handlerFilter('completed')}>Completed</button>
                <button onClick={() => handlerFilter('active')}>Active</button>
            </div>
            <input ref={inputRef} type="text" name='taskInput' />
            <button onClick={handlerAdd}>Add Task</button>
            <ul>
                {filteredTasks.map(item =>
                (
                    <li key={item.id}>
                        <input type='checkbox' checked={item.completed} onChange={() => handlerComplete(item.id)} />
                        <input type="text" value={item.editDraft} disabled={!item.isEditing} onChange={e => handlerUpdateEdited(e, item.id)} />
                        <button onClick={() => handlerStartEdited(item.id)}>✏️</button>
                        <button onClick={() => handlerSaveEdited(item.id)}>💾</button>
                        <button onClick={() => handlerDeleteTask(item.id)}>❌</button>
                    </li>
                )
                )}
            </ul>
        </>
    )
}
export default ToDoList