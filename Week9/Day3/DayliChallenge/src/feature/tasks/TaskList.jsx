// src/components/TaskList.js
import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTasksByCategory,
} from './state/selectors'; 
import {
  editTask,
  deleteTask,
  toggleTaskCompleted,
} from './state/taskSlice';

function TaskList() {
  // Select tasks for the currently selected category
  const tasks = useSelector(selectTasksByCategory);
  const dispatch = useDispatch();

  // State for editing a task
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  // Handle task completion toggle
  const handleToggleCompleted = useCallback((id) => {
    dispatch(toggleTaskCompleted({ id }));
  }, [dispatch]);

  // Handle task deletion
  const handleDeleteTask = useCallback((id) => {
    dispatch(deleteTask({ id }));
  }, [dispatch]);

  // Start editing a task
  const startEdit = useCallback((task) => {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
  }, []);

  // Save edited task
  const saveEdit = useCallback((id) => {
    if (editedTitle.trim()) {
      dispatch(editTask({ id, updates: { title: editedTitle.trim() } }));
      setEditingTaskId(null);
      setEditedTitle('');
    }
  }, [dispatch, editedTitle]);

  // Cancel editing
  const cancelEdit = useCallback(() => {
    setEditingTaskId(null);
    setEditedTitle('');
  }, []);

  if (tasks.length === 0) {
    return <div>No tasks in this category.</div>;
  }

  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') saveEdit(task.id);
                  }}
                />
                <button onClick={() => saveEdit(task.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span onClick={() => handleToggleCompleted(task.id)}>
                  {task.title}
                </span>
                <button onClick={() => startEdit(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;