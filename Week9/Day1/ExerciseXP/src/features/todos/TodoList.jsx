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