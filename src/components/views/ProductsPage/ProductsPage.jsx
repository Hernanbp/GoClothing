import React, {useState, useEffect} from 'react'
import axios from "axios";
// import { ProductCard }from "../ProductCard/ProductCard"

import { Link } from 'react-router-dom'
import { products } from '../../../data/prducts'



export const ProductsPage = () => {

  // GET + POST
    const [dataFromApi, setDataFromApi] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async function () {
      try{
        const res = await axios.get('https://alkcommerceback.herokuapp.com/products')
        console.log(res.data)
        setDataFromApi(res.data)
        setLoading(false)
      }
      catch(err){
        console.log(err)
      }
    })()
  },[])

/*
  const addProducto = ()=>{
    try {
      const res = axios.post('https://alkcommerceback.herokuapp.com/products', {
        "title": "usando el POST FALOP DESDE LA APP",
        "description": "alta jogineta para inveirno sfaf fsuaobf d asd f sf aefeffsefes efsString",
        "price": 6501,
        "image": "String",
        "category": "pants" 
      })
      console.log(res);
    }
    catch(err) {
      console.log(err)
    }
  }*/


  return (
    <>
    <h1>ProductsPage</h1>
    <hr />
      {products.map( product => (
            <div key={product._id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Link to={`/products/${product.category}/${product._id}`}>Más..</Link>
            </div>
        ))
      }
      <Link to='/'>Go to Home</Link>
    
    <h1> USANDO LA API:</h1>
    <hr />

      {loading ? "skeleton loading" :         //ESTO TENDRIA Q USAR PRODUCT CARD
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
