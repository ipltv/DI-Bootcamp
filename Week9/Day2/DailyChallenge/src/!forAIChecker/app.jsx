// Daily Challenge: Age Tracker with Redux Toolkit and Thunk

// This is main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './app/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

// This is app.jsx

import { useState } from 'react'
import './App.css'
import AgeControls from './features/age/AgeControls'
import AgeDisplay from './features/age/AgeDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AgeDisplay />
      <AgeControls />
    </>
  )
}

export default App

//Thid is store.js

import { configureStore } from "@reduxjs/toolkit"
import ageReducer from '../features/age/ageSlice.js'

const store = configureStore({
    reducer: {
        age: ageReducer,
    }
});

export default store;

//This is ageSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    age: 0,
    loading: null,
};
export const ageUpAsync = createAsyncThunk("age/up", async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return;
})

export const ageDownAsync = createAsyncThunk("age/down", async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return;
})


const ageSlice = createSlice({
    name: "age",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(ageUpAsync.pending, (state) => { state.loading = 'loading' })
            .addCase(ageUpAsync.rejected, (state) => { state.loading = 'error' })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.age++;
                state.loading = 'success'
            })

            .addCase(ageDownAsync.pending, (state) => { state.loading = 'loading' })
            .addCase(ageDownAsync.rejected, (state) => { state.loading = 'error' })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.age--;
                state.loading = 'success'
            })
    }
});

export default ageSlice.reducer;

//This is AgeControls.jsx
import React from 'react'
import { useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from './ageSlice';

const AgeControls = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => { dispatch(ageUpAsync()) }}>UP</button>
            <button onClick={() => { dispatch(ageDownAsync()) }}>DOWN</button>
        </div>
    )
}

export default AgeControls

//This is AgeDisplay.jsx
import { useSelector } from 'react-redux'
import spinner from '../../assets/react.svg'

const AgeDisplay = () => {
    const count = useSelector(state => state.age.age);
    const loading = useSelector((state) => state.age.loading);

    return (
        <div>
            <h2>AgeDisplay</h2>
            <strong>Age: {count}</strong>
            {loading === 'loading' && (
                <div>
                    <img src={spinner} alt="Loading..." width="40" />
                </div>
            )}
        </div>
    )
}

export default AgeDisplay