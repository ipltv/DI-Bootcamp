import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }, []);
    // if (count > 5) throw new Error("Oppsss....")
    if (count > 5) {
        navigate('/');
    }
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
}
