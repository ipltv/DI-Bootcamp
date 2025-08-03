import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)

import { DataFetcher } from './components/DataFetcher';
import { fetchRecipes } from './features/recipeSlice';
import { type RootState } from './store/store';
import { type RecipeSearchResponse } from './types/types';

function App() {
    return (
        <div>
            <h1>Recipe List</h1>
            <DataFetcher<RecipeSearchResponse>
                thunk={fetchRecipes}
                url="/recipes/complexSearch?query=pasta&number=5"
                selector={(state: RootState) => state.recipes}
                render={(data) => (
                    <ul>
                        {data.results.map((recipe) => (
                            <li key={recipe.id}>{recipe.title}</li>
                        ))}
                    </ul>
                )}
            />
        </div>
    );
}

export default App;

import { createGenericSlice, createFetchThunk } from './dataSlice';
import { type Recipe } from '../types/types';

export const fetchRecipes = createFetchThunk<Recipe[]>('recipes/fetch');
const recipeSlice = createGenericSlice<Recipe[]>('recipes', fetchRecipes);
export const recipeReducer = recipeSlice.reducer;

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

export interface Recipe {
    id: number;
    title: string;
    image: string;
}

export interface RecipeSearchResponse {
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
}

// src/components/DataFetcher.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { type AsyncThunk } from '@reduxjs/toolkit';

interface DataFetcherProps<T> {
    thunk: AsyncThunk<T, string, any>;
    url: string;
    selector: (state: any) => {
        data: T | null;
        loading: boolean;
        error: string | null;
    };
    render: (data: T) => React.ReactNode;
}

export function DataFetcher<T>({
    thunk,
    url,
    selector,
    render,
}: DataFetcherProps<T>) {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(selector);

    useEffect(() => {
        dispatch(thunk(url));
    }, [dispatch, thunk, url]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
    if (!data) return <p>No data available</p>;

    return <>{render(data)}</>;
}


import axios from "axios";

const API_HOST = import.meta.env.VITE_API_URL;;
const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
    baseURL: `https://${API_HOST}`,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
    },
});

export const fetchData = async <T>(url: string): Promise<T> => {
    const response = await axiosInstance.get<T>(url);
    return response.data;
};

// src/components/DataFetcher.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { type AsyncThunk } from '@reduxjs/toolkit';

interface DataFetcherProps<T> {
    thunk: AsyncThunk<T, string, any>;
    url: string;
    selector: (state: any) => {
        data: T | null;
        loading: boolean;
        error: string | null;
    };
    render: (data: T) => React.ReactNode;
}

export function DataFetcher<T>({
    thunk,
    url,
    selector,
    render,
}: DataFetcherProps<T>) {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(selector);

    useEffect(() => {
        dispatch(thunk(url));
    }, [dispatch, thunk, url]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
    if (!data) return <p>No data available</p>;

    return <>{render(data)}</>;
}
