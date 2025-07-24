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