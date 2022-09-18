import React, {useState, useEffect} from 'react'
import axios from "axios";
// import { ProductCard }from "../ProductCard/ProductCard"
import Skeleton from "react-loading-skeleton"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';




export const ProductsPage = () => {

  // GET + POST
    const [dataFromApi, setDataFromApi] = useState([])
    const [loading, setLoading] = useState(true)

    const{apiData} = useSelector(state=>{
      return state.allApiDataReducer
    })
    
  useEffect(() => {
    if(apiData.length > 1){ //si hay esta guardada en redux (de la pag principal)
      setDataFromApi(apiData)
      setLoading(false)
      console.log("por redux")
    } else{
       (async function () {
        try{
          const res = await axios.get('https://alkcommerceback.herokuapp.com/products')
          console.log(res.data)
          setDataFromApi(res.data)
          setLoading(false)
          console.log("por request")
        }
        catch(err){
          console.log(err)
        }
      })()
    }
  },[])
  


  return (
    <>
    <h1> USANDO LA API:</h1>
    <hr />
    

      {loading ? <Skeleton count={15} height={"50px"}/> :         //ESTO TENDRIA Q USAR PRODUCT CARD
        (dataFromApi.map( (apiProduct) => {
          return(
            <div key={apiProduct._id}>
                <h2>{apiProduct.title}</h2>
                <p>{apiProduct.description}</p>
                <p>{apiProduct.price}</p>
                <p>{apiProduct.category}</p>
                {/* <img src={apiProduct.image} /> */}
                <Link to={`/products/${apiProduct.category}/${apiProduct._id}`}>Más..</Link>
            </div>
          )})
        )
      }
    
    </>
  )
}
