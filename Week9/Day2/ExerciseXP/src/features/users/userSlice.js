import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    status: 'idle',
    error: null,
};


export const fetchUsersData = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsersData.pending, (state) => { state.status = 'loading' })
            .addCase(fetchUsersData.rejected, (state) => { state.status = 'error' })
            .addCase(fetchUsersData.fulfilled, (state, action) => {
                console.log(action.payload);
                state.users = action.payload;
                // usersArray.forEach(user => {
                //     state.users[user.id] = user;
                // });
                state.status = 'success'
            })

    }
})

export default userSlice.reducer;