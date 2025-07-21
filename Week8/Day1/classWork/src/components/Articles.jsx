import { useState, useEffect } from 'react';
import { Article } from './Article';

export const Articles = (props) => {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(props.id);

    useEffect(() => {
        if (props.id != userId){
            setUserId(props.id);
        }
        getPosts();
    }, [userId, props.id])

    const getPosts = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const data = await response.json();
            setPosts(data.slice(0, 5));
        } catch (error) {
            console.error('Loading error:', error);
        }
    };


    return (
        <>
            <h2>News Articles</h2>
            <button onClick={getPosts}>Get Article</button >
            <div>
                <input onChange={(e) => setUserId(e.target.value)} type="number" max='10' min='0' placeholder='User ID...' />
            </div>
            {
                posts.map(post => (
                    <Article key={post.id} title={post.title} body={post.body} />
                ))
            }
        </>
    )
}
