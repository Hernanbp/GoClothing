import "./styles.css"
//import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {addToCart} from "../redux/ReduxFunctions"
import Swal from "sweetalert2"

export function ProductCard(props) {

  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)) //subir a redux
    // Subir/actualizar a localstorage
      const stringCart = localStorage.getItem("cart");
      const viejo = JSON.parse(stringCart)
      viejo.push(product);
      localStorage.setItem("cart", JSON.stringify(viejo));
    Swal.fire({
      icon: "success",
      title: "agregaste al carrito",
      timer: 1000
    })
  }
  const nikeImg = "https://static.nike.com/a/images/t_default/ce31ca84-32d3-454b-86b6-340cb6063de6/pantalones-de-entrenamiento-dri-fit-41n6G2.png"
  return (
    <>
      <div className="card-container"> 
          <div key={props.id} className="item"> 
            <div className="item-title">
              {/* <img src={nikeImg} alt=""/> */}
              <img src={props.image} alt=""/>
              <button>SALE</button>{/*HORRIBLE, pero para implementar REDUX*/}
            </div >
            <div className="item-description">
              <h3> {props.description.slice(0, 12) + '...'}</h3>
                <div>
                  <p> {props.category}</p>
                  <div>
                    {/* <p className={props.beforePrice === "" ? "": "discount"}> {props.beforePrice==="" ? "" : `$`+props.beforePrice}</p> */}
                    <p> {`$${props.price}`}</p>
                    <button onClick={() => handleAddToCart(props.product)}>Shop</button>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </>);
}
