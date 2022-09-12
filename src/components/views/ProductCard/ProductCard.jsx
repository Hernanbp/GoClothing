import "./styles.css"
//import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {addToCart} from "../redux/ReduxFunctions"
import Swal from "sweetalert2"

export function ProductCard(props) {

  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    Swal.fire({
      icon: "success",
      title: "agregaste al carrito",
      timer: 1000
    })
  }

  //const [fetchedData, setFetchedData] = useState(null)
  /* 
  useEffect(() => {
    (async function () {
      const res = await fetch('https://fakestoreapi.com/products')
      const apiData = await res.json()
      console.log(apiData)
      setFetchedData(apiData)
    })()
    // (async function () {
    //   fetch('https://fakestoreapi.com/products')
    //     .then(res=>res.json())
    //     .then(data => {
    //       // console.log(data)
    //       setFetchedData(data)
    //     })
    //     .catch(err => console.error(err))
    // }
    // )()
      // fetch('https://fakestoreapi.com/products')
      //   .then(res=>res.json())
      //   .then(data => {
      //     // console.log(data)
      //     setFetchedData(data)
      //   })
      //   .catch(err => console.error(err))
  },[])
*/
  return (
    <>
      <div className="card-container"> 
          <div key={props.id} className="item"> 
            <div className="item-title">
              <img src="../assets/p1.png" alt=""/>
              <button onClick={() => handleAddToCart(props.product)}>SALE</button>{/*HORRIBLE, pero para implementar REDUX*/}
            </div >
            <div className="item-description">
              <h3> {props.description.slice(0, 10) + '...'}</h3>
                <div>
                  <p> {props.category}</p>
                  <div>
                    <button onClick={() => handleAddToCart(props.product)}>Shop</button>{/*HORRIBLE, pero para implementar REDUX*/}
                    <p className={props.beforePrice === "" ? "": "discount"}> {props.beforePrice==="" ? "" : `$`+props.beforePrice}</p>
                    <p> {`$`+ props.price}</p>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </>);
}
