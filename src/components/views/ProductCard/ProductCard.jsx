import "./styles.css"
//import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {addToCart} from "../redux/ReduxFunctions"
import Swal from "sweetalert2"
import { Link } from "react-router-dom";






export function ProductCard({ products }) {

  console.log(products);

  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    Swal.fire({
      icon: "success",
      title: "agregaste al carrito",
      timer: 1000
    })
  }
  
  return (
    <>
      <div key={products._id} className="card-container"> 
          <div className="item"> 
            <div className="item-title">
              <img src={products.image} alt=""/>
              <button onClick={() => handleAddToCart(products.product)}>SALE</button>{/*HORRIBLE, pero para implementar REDUX*/}
            </div >
            <div className="item-description">
              <h3> {products.title}</h3>
                <div>
                  <p> {products.category}</p>
                  <div>
                    {/* <button onClick={() => handleAddToCart(products.product)}>Shop</button>HORRIBLE, pero para implementar REDUX */}
                    <p> {`$`+ products.price}</p>
                    <Link to={`/products/${products.category}/${products._id}`}>Más..</Link>
                  </div>
              </div>
            </div>
          </div>
      </div> 
    </>
    )


}
