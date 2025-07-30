import { createSelector } from "@reduxjs/toolkit";
import { fetchPosts, state } from './postSlice'
import { useDispatch } from "react-redux";

export const selectPosts = createSelector([state], (state) => state.postsCollection);
export const selectStatus = createSelector([state], (state) => state.status);
