//store.js
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/state/bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;


//bookSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    books: [
        { id: 1, title: "It", author: "Stephen King", genre: "horror" },
        { id: 2, title: "Harry Potter", author: "J.K. Rowling", genre: "fantasy" },
        { id: 3, title: "Dune", author: "Frank Herbert", genre: "science fiction" },
        { id: 4, title: "The Shining", author: "Stephen King", genre: "horror" },
        { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "fantasy" },
    ],
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {}
});

export const selectBooksState = (state) => state.books;
export default bookSlice.reducer;

// BookList.jsx
import { useSelector } from "react-redux";
import {
    selectHorrorBooks,
    selectFantasyBooks,
    selectScienceFictionBooks,
    selectBooks,
} from "./state/selectors";
import { useState } from "react";

const genreOptions = [
    { label: "All", value: "all" },
    { label: "Horror", value: "horror" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Science Fiction", value: "science fiction" },
];

const BookList = () => {
    const [selectedGenre, setSelectedGenre] = useState("all");

    const allBooks = useSelector(selectBooks);
    const horrorBooks = useSelector(selectHorrorBooks);
    const fantasyBooks = useSelector(selectFantasyBooks);
    const sciFiBooks = useSelector(selectScienceFictionBooks);

    let displayedBooks = allBooks;
    if (selectedGenre === "horror") displayedBooks = horrorBooks;
    if (selectedGenre === "fantasy") displayedBooks = fantasyBooks;
    if (selectedGenre === "science fiction") displayedBooks = sciFiBooks;

    return (
        <div>
            <h2>Book Inventory</h2>
            <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                {genreOptions.map((genre) => (
                    <option key={genre.value} value={genre.value}>{genre.label}</option>
                ))}
            </select>

            <ul>
                {displayedBooks.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author} ({book.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;

//selectors.js

import { createSelector } from "@reduxjs/toolkit";
import { selectBooksState } from "./bookSlice";

export const selectBooks = createSelector(
  [selectBooksState],
  (booksState) => booksState.books
);

export const selectHorrorBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "horror")
);

export const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "fantasy")
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "science fiction")
);


// App.jsx
import BookList from "./features/books/BookList";

function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}

export default App;


//main.jsx

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
