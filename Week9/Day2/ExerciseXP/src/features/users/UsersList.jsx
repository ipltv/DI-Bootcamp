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