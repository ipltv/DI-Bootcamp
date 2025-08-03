import { createSlice, createAsyncThunk, type PayloadAction, type AsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../api/api';

export function createFetchThunk<T>(type: string) {
    return createAsyncThunk<T, string>(
        type,
        async (url: string) => {
            const data = await fetchData<T>(url);
            return data;
        }
    );
}

interface GenericState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function createGenericSlice<T>(
    name: string,
    fetchThunk: AsyncThunk<T, string, {}>
) {
    const initialState: GenericState<T> = {
        data: null,
        loading: false,
        error: null,
    };
    const slice = createSlice({
        name,
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(fetchThunk.pending, state => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchThunk.fulfilled, (state, action: PayloadAction<T>) => {
                    state.loading = false;
                    state.data = action.payload;
                })
                .addCase(fetchThunk.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'Failed to fetch data';
                });
        },
    });

    return slice;
}