import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './state/postSlice';
import ReactionButton from './ReactionButton'
import { useFetchPosts, usePostsSelector, usePostsStatus } from './state/hooks';


const PostsList = () => {
    // const posts = useSelector(state => state.posts.postsCollection);
    // const status = useSelector(state => state.posts.status);
    const posts = usePostsSelector();
    const status = usePostsStatus();

    const callFetchPost = useFetchPosts();

    useEffect(() => {
        callFetchPost();
    }, [])
    if (status === 'loading') return <p>Loading...</p>
    if (status === 'error') return <p>Error fetching posts.</p>
    return (
        <>
            <h2>The Posts List</h2>
            <section>
                {
                    posts && posts.map(post => {
                        return (
                            <article key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <ReactionButton id={post.id} reactions={post.reactions} />
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}

export default PostsList