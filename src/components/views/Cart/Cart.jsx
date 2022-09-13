import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'

export const Cart = () => {

  const dispatch = useDispatch()

  const {error, loading, cart} = useSelector(state=>{
    // console.log(state)          // TODOs los reducers
    console.log(state.cartReducer) // SOLO el reducer del carrito
    return state.cartReducer
  })

  return (
    <div>
    Cart Route
    <Link to="/"> Keep Shopping</Link>

      {cart && cart.map((productInCart, i)=>{
          return (
            <div key={i}>
              <ProductCard 
                description={productInCart.description}
                category={productInCart.category}
                price={productInCart.price}
                beforePrice ={productInCart.beforePrice}
                product={productInCart}
              />
            </div>
          )
      })}

    </div>
  )
}


