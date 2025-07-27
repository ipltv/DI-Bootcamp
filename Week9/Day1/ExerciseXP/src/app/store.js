import { configureStore } from "@reduxjs/toolkit";
import  toDoListReducer from '../features/todos/todoSlice.js';

const store = configureStore({ reducer: toDoListReducer });

export default store;
