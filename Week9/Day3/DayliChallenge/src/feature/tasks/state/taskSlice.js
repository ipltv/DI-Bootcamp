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