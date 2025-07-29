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