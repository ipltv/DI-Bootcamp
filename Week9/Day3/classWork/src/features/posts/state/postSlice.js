import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const POST_URL = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
    postsCollection: [],
    status: null,
};

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
    const response = await axios.get(POST_URL);
    const data = response.data;
    return data;
})

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addReaction: (state, action) => {
            const { id, name } = action.payload;
            const post = state.postsCollection.find((item) => item.id === id);
            if (post) { post.reactions[name]++; }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => { state.status = 'loading' })
            .addCase(fetchPosts.rejected, (state) => { state.status = 'error' })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                const postsWithReactions = action.payload.map(item => {
                    return {
                        ...item, reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                });
                state.postsCollection = postsWithReactions;
                state.status = 'success'
            })
    }
});

export const state = (state) => state.posts;
export const { addReaction } = postSlice.actions;
export default postSlice.reducer;