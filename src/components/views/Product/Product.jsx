import "./styles.css"
//import { useEffect, useState } from "react"


export function Product(props) {
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

  // ESTA FUNC. la TENEMOS Q LLAMAR productCard:
 
  return (
    <>
      <div className="card-container"> 
          <div key={props.id} className="item"> 
            <div className="item-title">
              <img src="../assets/p1.png" alt=""/>
              <button>SALE</button>
            </div >
            <div className="item-description">
              <h3> {props.description}</h3>
                <div>
                  <p> {props.category}</p>
                  <div>
                    <p className={props.beforePrice === "" ? "": "discount"}> {props.beforePrice}</p>
                    <p> {props.price}</p>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </>);
}
