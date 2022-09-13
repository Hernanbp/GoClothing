import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../../helpers/getProductById";
import { Navbar } from "../../views";
import { ProductSize } from "./ProductSize";
import "./styles.css"
import { useDispatch } from "react-redux"
import {addToCart} from "../redux/ReduxFunctions"
import Swal from "sweetalert2"


export const ProductDetail = () => {

    // arreglar para que cree una url con el id
    // poner objeto en otro archivo

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
      dispatch(addToCart(product))
      Swal.fire({
        icon: "success",
        title: "agregaste al carrito",
        timer: 1000
      })
    }

    const { _id } = useParams();
    
    const products = useMemo( () => getProductById( _id ), [ _id ])
    console.log(products)
  return (
    <>
        <Navbar />
        <section className='product-section'>
            <div className='product-container'>

                <div className='product-img'>
                    <img src={`../assets/${products.img}`} alt="product_img" />
                </div>


                <div className='product-info'>
                    <h1 className='title'>{products.name}</h1>
                    <span className='price'>€{products.price}*</span>
                    <p className='description'>{products.description}</p>

                    {/* crear comp aparte, mandar cosas por ref() para que aparezca  "Select Size:" y renderize segun cat*/}
                    <ProductSize products={products} />

                    <div className='buttons'>
                        <Link to="/products" onClick={() => handleAddToCart(products)}>Add to Bag</Link>
                        <span>or</span>
                        <Link to="/products">Go to Products</Link>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
