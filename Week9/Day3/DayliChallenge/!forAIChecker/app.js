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


import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../feature/tasks/state/taskSlice'

const store = configureStore({
    reducer: {
        todos: taskReducer,
    }
})

export default store;


import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks: {
        byId: {
            "task1": {
                id: "task1",
                title: "Read Redux documentation",
                categoryId: "study",
                completed: false,
            },
            "task2": {
                id: "task2",
                title: "Grocery shopping",
                categoryId: "personal",
                completed: true,
            },
            "task3": {
                id: "task3",
                title: "Finish project report",
                categoryId: "work",
                completed: false,
            }
        },
        allIds: ["task1", "task2", "task3"]
    },
    categories: ["work", "personal", "study"],
    selectedCategory: "work"
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action) {
            const id = uuidv4();
            const newTask = {
                ...action.payload.task,
                id: id,
                completed: false,
            };
            state.tasks.byId[id] = newTask;
            state.tasks.allIds.push(id);
        },
        editTask(state, action) {
            const { id, updates } = action.payload;
            const task = state.tasks.byId[id];
            if (task) {
                state.tasks.byId[id] = {
                    ...task,
                    ...updates,
                };
            }
        },
        deleteTask(state, action) {
            const { id } = action.payload;
            delete state.tasks.byId[id];
            state.tasks.allIds = state.tasks.allIds.filter(taskId => taskId !== id);
        },
        toggleTaskCompleted(state, action) {
            const { id } = action.payload;
            if (state.tasks.byId[id]) {
                state.tasks.byId[id].completed = !state.tasks.byId[id].completed;
            }
        },
        addCategory(state, action) {
            const name = action.payload;
            if (!state.categories.includes(name)) {
                state.categories.push(name);
            }
        },
        editCategory(state, action) {
            const { oldName, newName } = action.payload;
            const index = state.categories.findIndex(cat => cat === oldName);
            if (index !== -1) {
                state.categories[index] = newName;
                state.tasks.allIds.forEach(id => {
                    const task = state.tasks.byId[id];
                    if (task.categoryId === oldName) {
                        task.categoryId = newName;
                    }
                });
            }
        },
        deleteCategory(state, action) {
            const name = action.payload.category;
            state.categories = state.categories.filter(item => item !== name);

            state.tasks.allIds.forEach(id => {
                if (state.tasks.byId[id].categoryId === name) {
                    state.tasks.byId[id].categoryId = null;
                }
            });
        },
        setSelectedCategory(state, action) {
            if (state.categories.includes(action.payload.category)) {
                state.selectedCategory = action.payload.category;
            }
        }
    }
});

export const {
    addTask,
    deleteTask,
    editTask,
    toggleTaskCompleted,
    addCategory,
    editCategory,
    deleteCategory,
    setSelectedCategory } = taskSlice.actions;
export const selectTasksState = (state) => state.todos.tasks;
export const selectCategoriesState = (state) => state.todos.categories;
export const selectSelectedCategoryState  = (state) => state.todos.selectedCategory;
export default taskSlice.reducer;

import { createSelector } from "@reduxjs/toolkit";
import { selectTasksState, selectSelectedCategoryState , selectCategoriesState } from "./taskSlice";

export const selectTasksByCategory = createSelector(
    [selectTasksState, selectSelectedCategoryState ],
    (tasks, category) => {
        return tasks.allIds
            .map(id => tasks.byId[id])
            .filter(task => task.categoryId === category);
    });

export const selectCompletedTasks = createSelector(
    [selectTasksState],
    (tasks) => {
        return tasks.allIds
            .map(id => tasks.byId[id])
            .filter(task => task.completed)
            .length;
    }
);

export const selectCategoryByName = createSelector(
    [selectCategoriesState, (state, categoryName) => categoryName],
    (categories, categoryName) => { return categories.find(cat => cat === categoryName); }
);

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

// src/components/CategorySelector.js
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setSelectedCategory,
    addCategory,
    editCategory,
    deleteCategory,
    selectCategoriesState,
    selectSelectedCategoryState
} from './state/taskSlice.js';

function CategorySelector() {
    const categories = useSelector(selectCategoriesState);
    const selectedCategory = useSelector(selectSelectedCategoryState);
    const dispatch = useDispatch();

    const [newCategoryName, setNewCategoryName] = useState('');
    const [editingCategoryName, setEditingCategoryName] = useState('');
    const [editingCategoryOriginalName, setEditingCategoryOriginalName] = useState(null);

    // Handle category selection
    const handleSelectCategory = useCallback((category) => {
        dispatch(setSelectedCategory({ category }));
    }, [dispatch]);

    // Handle adding a new category
    const handleAddCategory = useCallback(() => {
        if (newCategoryName.trim() && !categories.includes(newCategoryName.trim())) {
            dispatch(addCategory(newCategoryName.trim()));
            setNewCategoryName('');
        }
    }, [dispatch, newCategoryName, categories]);

    // Start editing a category
    const startEditCategory = useCallback((category) => {
        setEditingCategoryOriginalName(category);
        setEditingCategoryName(category);
    }, []);

    // Save edited category
    const saveEditCategory = useCallback(() => {
        if (editingCategoryName.trim() && editingCategoryOriginalName) {
            dispatch(editCategory({
                oldName: editingCategoryOriginalName,
                newName: editingCategoryName.trim()
            }));
            setEditingCategoryOriginalName(null);
            setEditingCategoryName('');
        }
    }, [dispatch, editingCategoryName, editingCategoryOriginalName]);

    // Cancel category editing
    const cancelEditCategory = useCallback(() => {
        setEditingCategoryOriginalName(null);
        setEditingCategoryName('');
    }, []);

    // Handle deleting a category
    const handleDeleteCategory = useCallback((category) => {
        if (window.confirm(`Are you sure you want to delete category "${category}"? Tasks assigned to this category will become unassigned.`)) {
            dispatch(deleteCategory({ category }));
            // If the deleted category was selected, reset selectedCategory to null or a default
            if (selectedCategory === category) {
                dispatch(setSelectedCategory({ category: null })); // Or categories[0] if you want a default
            }
        }
    }, [dispatch, selectedCategory]);

    return (
        <div className="category-selector">
            <h3>Categories</h3>
            <div>
                <select onChange={(e) => handleSelectCategory(e.target.value)} value={selectedCategory || ''}>
                    <option value="">Select a category</option> {/* Option for no category selected */}
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <h4>Manage Categories</h4>
                {categories.map((category) => (
                    <div key={category}>
                        {editingCategoryOriginalName === category ? (
                            <>
                                <input
                                    type="text"
                                    value={editingCategoryName}
                                    onChange={(e) => setEditingCategoryName(e.target.value)}
                                    onKeyUp={(e) => {
                                        if (e.key === 'Enter') saveEditCategory();
                                    }}
                                />
                                <button onClick={saveEditCategory}>Save</button>
                                <button onClick={cancelEditCategory}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span>{category}</span>
                                <button onClick={() => startEditCategory(category)}>Edit</button>
                                <button onClick={() => handleDeleteCategory(category)}>Delete</button>
                            </>
                        )}
                    </div>
                ))}

                <div>
                    <input
                        type="text"
                        placeholder="New category name"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') handleAddCategory();
                        }}
                    />
                    <button onClick={handleAddCategory}>Add Category</button>
                </div>
            </div>
        </div>
    );
}

export default CategorySelector;