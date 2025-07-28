// Exercise 1: Fetching User Data with Redux Thunk

// This is main.jsx
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

// This is App.jsx
import './App.css'
import UsersList from './features/users/UsersList'

function App() {

  return (
    <>
      <UsersList></UsersList>
    </>
  )
}

export default App

//This is store.js
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/users/userSlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export default store;

//This is UsersList.jsx
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from './userSlice';
import UserItem from './UserItem'

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const status = useSelector((state) => state.users.status);


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsersData());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Error loading users</p>;
    return (
        <ul>
            {users && users.map(item => <UserItem key={item.id} user={item} />)}
        </ul>
    )
}

export default UsersList

//This is userItem.jsx
const UserItem = ({ user }) => {
    return (
        <li>
            <strong>ID:</strong> {user.id} | <strong>Name:</strong> {user.name} | <strong>Username:</strong> {user.username}
        </li>
    )
}

export default UserItem