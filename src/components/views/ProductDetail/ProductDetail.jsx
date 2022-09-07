import { useParams } from "react-router-dom";
import { getProductById } from "../../../helpers/getProductById";
import { Navbar } from "../../views";
import { ProductSize } from "./ProductSize";
import "./styles.css"


export const ProductDetail = () => {

    // arreglar para que cree una url con el id
    // poner objeto en otro archivo

    const { _id } = useParams();
    
    const products = getProductById(_id)



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
                    <ProductSize />

                    <div className='buttons'>
                        <button>Add to Bag</button>
                        <span>or</span>
                        <button>Go to Home</button>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
