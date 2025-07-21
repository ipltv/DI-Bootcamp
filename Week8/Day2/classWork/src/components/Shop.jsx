import React from 'react'
import { Link } from 'react-router'

const Shop = () => {
  return (
    <>
      <h2>Shop</h2>
      <div style={{ border: '1px solid pink', padding: '20px', margin: '20px' }}>
        <h2>iPhone 15</h2>
        <Link to={`/product/111`}>Buy Now</Link>
      </div>
      <div style={{ border: '1px solid pink', padding: '20px', margin: '20px' }}>
        <h2>iPhone 16</h2>
        <Link to={`/product/222`}>Buy Now</Link>
      </div>
    </>
  )
}

export default Shop