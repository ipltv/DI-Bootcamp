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