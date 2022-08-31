import "./styles.css"
import { useEffect, useState } from "react"

export function ProductsList() {

  const [fetchedData, setFetchedData] = useState(null)

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

  return (
    <>
      <div className="card-container"> 
        P list
        {fetchedData && fetchedData.map( (item)=>{
          return (
          <div key={item.id} className="item"> 
            <h2>{item.title} </h2>
            <img src={item.image} />
            <p> {item.rating.rate} Estrellitas</p>
            <p> {item.price}</p>
            <p> {item.category}</p>
            <h6> {item.description}</h6>
          </div>
          )
        })
        }
      </div>
    </>
  )
}
