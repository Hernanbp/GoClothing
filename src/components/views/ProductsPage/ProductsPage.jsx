import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../../data/prducts'



export const ProductsPage = () => {
  return (
    <>
    <div>ProductsPage</div>
    {
                products.map( product => (
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <Link to={`/hero/${product._id}`}>Más..</Link>
                    </div>
                ))
            }
    </>
  )
}
