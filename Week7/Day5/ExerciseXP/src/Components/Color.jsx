import { useEffect } from 'react';
import { useState } from 'react'

export default function Color() {
    const [favoriteColor, setFavoriteColor] = useState("blue");

    useEffect(() => {
        alert("useEffect reached");
        setFavoriteColor("yellow");
    }, [])

    return (
        <>
            <h2>My Favorite Color is {favoriteColor}</h2>
            <button onClick={() => setFavoriteColor("blue")}>Change fav color</button>
        </>
    )
}
