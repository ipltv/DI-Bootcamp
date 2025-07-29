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