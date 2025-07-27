import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from './todoSlice'

const AddTodo = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.selectedDate)
    const inputRef = useRef();

    const handleAdd = () => {       
        dispatch(addTask({ date: selectedDate, task: {text: inputRef.current.value.trim()} }))
        inputRef.current.value = '';
    }
    
    return (
        <>
            <input ref={inputRef} type="text" name='taskInput' />
            <button onClick={handleAdd}>Add Task</button>
        </>
    )
}

export default AddTodo