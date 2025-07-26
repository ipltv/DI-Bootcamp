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
