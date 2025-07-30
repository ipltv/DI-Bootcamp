import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectStatus } from './selectors';
import { useCallback } from "react";
import { fetchPosts } from './postSlice'



export const usePostsSelector = () => {
    return useSelector(selectPosts);
}

export const usePostsStatus = () => {
    return useSelector(selectStatus);
}

export const useFetchPosts = () => {
    const dispatch = useDispatch()
    return useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch])
};

export const useAddReactions = () => {
    const dispatch = useDispatch();
    return useCallback((id, name) => {
        dispatch(addReaction({ id, name }));
    }, [dispatch]);
};