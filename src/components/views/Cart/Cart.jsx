import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import "./styles.css"
import {Navbar} from "../Navbar/Navbar"
import {Footer} from "../Footer/Footer"

export const Cart = () => {

  const dispatch = useDispatch()

  const {error, loading, cart} = useSelector(state=>{
    console.log(state.cartReducer) // SOLO el reducer del carrito
    return state.cartReducer
  })

  return (
    <div className='cart'>
      <Navbar />
      <h2>Your Cart</h2>
      {
        /* algun icono de un carrito */
        console.log(cart)
      }
      <div className='cart-container'>
        <table className='cart-left'> 
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>PRODUCT</td>
              <td>PRICE</td>
              <td>QUANTITY</td>
              <td>CATEGORY</td>
              <td>SUBTOTAL</td>
            </tr>
            {cart.length > 0 ? (cart.map((productInCart, i)=>{
              return (
                <tr>
                  <td onClick={()=>{console.log("sacar del carrito")}}>X</td>
                  <td><img src={productInCart.image} style={{width:"50%"}} alt=""/></td>
                  <td>{productInCart.title}</td>
                  <td>{productInCart.price}$</td>
                  <td>{productInCart.category}</td>
                  <td>1=</td>
                  <td>4500$=</td>
                </tr>
              )
            }))
            :
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><h3>Sorry, the cart is empty!</h3></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            }
          </tbody>
        </table>

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
      <Footer />

    </div>
  )
}