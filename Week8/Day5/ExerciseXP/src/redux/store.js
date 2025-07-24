import { configureStore } from "@reduxjs/toolkit";
import { toDoListReducer } from './reducers.js';


const store = configureStore({ reducer: toDoListReducer });
console.log(store.getState());

export default store;
