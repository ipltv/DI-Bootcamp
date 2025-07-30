import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/state/postSlice.js'

const appReducer = combineReducers({
    posts: postsReducer,
})

const store = configureStore({
    reducer: appReducer,
});

export default store;