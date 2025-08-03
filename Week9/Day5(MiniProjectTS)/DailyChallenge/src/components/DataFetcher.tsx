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
