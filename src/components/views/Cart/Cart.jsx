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
            {cart ? (cart.map((productInCart, i)=>{
              return (
                <tr>
                  <td onClick={()=>{console.log("sacar del carrito")}}>X</td>
                  <td><img src={productInCart.image} style={{width:"50%"}}/></td>
                  <td>{productInCart.title}</td>
                  <td>{productInCart.price}$</td>
                  <td>{productInCart.category}</td>
                  <td>quantity(hard)</td>
                  <td>subtotal(hard)</td>
                  </tr>
              )
            }))
            : <h3>NO HAY NADA</h3>
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
  

    </div>
  )
}