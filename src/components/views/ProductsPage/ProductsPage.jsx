import React, {useState, useEffect} from 'react'
import axios from "axios";
import { ProductCard }from "../ProductCard/ProductCard"
import { Navbar } from "../../views"
import "./styles.css"
import { SkeletonCard } from '../ProductCard/SkeletonCard';



export const ProductsPage = () => {

  // GET + POST
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async function () {
      try{
        const res = await axios.get('https://alkcommerceback.herokuapp.com/products')
        console.log(res.data)
        setProducts(res.data)
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
    <Navbar />
    <section className='productPage-section'>
      <div className='container'>
        <div className='controler'>
          <div>
            <h3>Search</h3>
           <input type="text" />
          </div>

          <div>
            <h3>Maximum price</h3>
            <input type="range" />
          </div>

          <div>
            <h3>Categories</h3>
            <ul>
              <li>Pants</li>
              <li>Shoes</li>
              <li>Purses</li>
              <li>T-Shirts</li>
              <li>Jackets</li>
            </ul>
          </div>

        </div>


        <div className='product-list'>
          { !loading ?
            (products.map( (products) => {
              return(
                <ProductCard products={products}/>
              )})
              ) 
              :
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
          }
        </div>
      </div>
    </section>
  
    </>
  )
}
