import React from 'react'
import { useParams } from 'react-router'

const Products = () => {
    const params = useParams();
    console.log(params);

    return (
        <>
            <h2>Product No#: {params.id}</h2>
        </>
    )
}

export default Products