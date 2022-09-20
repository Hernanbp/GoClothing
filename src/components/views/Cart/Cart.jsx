import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import "./styles.css"
import {Navbar} from "../Navbar/Navbar"

export const Cart = () => {

  const dispatch = useDispatch()

  const {error, loading, cart} = useSelector(state=>{
    console.log(state.cartReducer) // SOLO el reducer del carrito
    return state.cartReducer
  })

  return (
    <div className='cart'>
      <Navbar />
      <h2>Cart</h2>
      <div> {/*SIN NOMBRE*/}
        <div className='cart-left'>
          {cart ? (cart.map((productInCart, i)=>{
            return (
                <ProductCard 
                  key={i}
                  title={productInCart.title}
                  image={productInCart.image}
                  category={productInCart.category}
                  price={productInCart.price}
                  product={productInCart}
                />
            )
          }))
          : <h3>NO HAY NADA</h3>
          }
        </div>
        <div className="cart-right">
          <h3>Cart totals</h3>
          <div>
            <p>SUBTOTAL</p>
            <p>2000(hard)</p>
          </div>
          <div>
            <p>TOTAL</p>
            <p>3800(hard)</p>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
  

    </div>
  )
}


