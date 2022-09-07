import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../../data/prducts'



export const ProductsPage = () => {
  return (
    <>
    <h1>ProductsPage</h1>
    <hr />
    {
        products.map( product => (
            <div key={product._id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Link to={`/products/${product._id}`}>Más..</Link>
            </div>
        ))
      }
      <Link to='/'>Go to Home</Link>
    </>
  )
}
