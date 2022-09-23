import React, { useState } from 'react'
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


  const [showPhone, setShowPhone] = useState();
  console.log(window.innerWidth);
  function resizeListener() {
    setShowPhone (window.innerWidth);
  }
  //por si cambia en la misma pantalla
  window.addEventListener("resize", resizeListener);

  return (
    <div className='cart' onLoad={resizeListener}>
      <Navbar />
      <h3>Home / Cart</h3>
      <h2>Cart</h2>
      {
        /* algun icono de un carrito */
        console.log(cart)
      }
      <span id="width"></span>
      <div className='cart-container'>
        {
          showPhone > 500 ?
          <table className='cart-left'> 
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>PRODUCT</td>
                <td>PRICE</td>
                <td>CATEGORY</td>
                <td>QUANTITY</td>
                <td>SUBTOTAL</td>
              </tr>
              {cart.length > 0 ? (cart.map((productInCart, i)=>{
                return (
                  <tr>
                    <td onClick={()=>{console.log("sacar del carrito")}}>X</td>
                    <td><img src={productInCart.image} style={{width:"50%"}} alt=""/></td>
                    <td style={{color:"rgb(212, 192, 75)", fontWeight:"900"}}>{productInCart.title}</td>
                    <td>{productInCart.price}$</td>
                    <td style={{color:"rgb(212, 192, 75)", fontWeight:"900"}}>{productInCart.category}</td>
                    <td>{productInCart.quantity}</td>
                    <td>{productInCart.price*productInCart.quantity}</td>
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
          </table>:<table className='cart-phone'> 
            <tbody>
              {cart.length > 0 ? (cart.map((productInCart, i)=>{
                return (
                  <div>
                    <tr>
                      <td className='td-img'><img src={productInCart.image} style={{width:"50%"}} alt=""/></td>
                      <td className='td-x'> <a onClick={()=>{console.log("sacar del carrito")}}>X</a></td>
                    </tr>
                    <tr>
                       <td>CATEGORY:</td>
                       <td>{productInCart.category}</td>
                    </tr>
                    <tr>
                       <td>PRODUCT:</td>
                       <td>{productInCart.title}</td>
                    </tr>

                    <tr>
                      <td>PRICE:</td>
                      <td>{productInCart.price}$</td>
                    </tr>
                    <tr>
                      <td>QUANTITY:</td> 
                      <td>1=</td>
                    </tr>
                    <tr>
                       <td>SUBTOTAL:</td>
                       <td>4500$=</td>
                    </tr>
                  </div>
                )
              }))
              :
              <tr>
                <td><h3>Sorry, the cart is empty!</h3></td>
              </tr>
              }
            </tbody>
          </table>
        }
        
       
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