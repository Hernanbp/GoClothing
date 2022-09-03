import "./styles.css"
//import { useEffect, useState } from "react"
import ProductZara from "../BeetSellere/ProductZara"


  export function ProductsList() {
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
    {
      /*
      <div className="card-container"> 
    
        P list
        {fetchedData && fetchedData.map( (item)=>{
          return (
          <div key={item.id} className="item"> 
            <h2>{item.title} </h2>
            <img src={item.image} alt=""/>
            <p> {item.rating.rate} Estrellitas</p>
            <p> {item.price}</p>
            <p> {item.category}</p>
            <h6> {item.description}</h6>
          </div>
          )
        })
        }
      </div>
      
      */

    }
      <div className="card-container"> 
        {
        ProductZara.map( (item)=>{
          return (
          <div key={item.id} className="item"> 
            <div className="item-title">
              <img src="../assets/p1.png" alt=""/>
              <button>SALE</button>
            </div >
            <div className="item-description">
              <h3> {item.description}</h3>
                <div>
                  <p> {item.category}</p>
                  <div>
                    <p className={item.beforePrice === "" ? "": "discount"}> {item.beforePrice}</p>
                    <p> {item.price}</p>
                  </div>
                </div>
            </div>
          </div>
          )
        })
        }
      </div>
    </>
  )
}
