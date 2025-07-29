// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/state/bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
