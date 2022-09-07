import React, { useState } from 'react'
import { Navbar } from "../../views";
import "./styles.css"

export const ProductDetail = () => {

    // arreglar para que cree una url con el id
    // poner objeto en otro archivo

    const product = {
        _id: "purse-zara",
        name: "Purse Zara",
        description: "Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic shape.",
        price: 275,
        category: "purse"
    }
    

    const [selected, setSelected] = useState(1)



  return (
    <>
        <Navbar />
        <section className='product-section'>
            <div className='product-container'>

                <div className='product-img'>
                    <img src="" alt="'product_img" />
                </div>


                <div className='product-info'>
                    <h1 className='title'>{product.name}</h1>
                    <span className='price'>${product.price}</span>
                    <p className='description'>{product.description}</p>

                    {/* crear comp aparte, mandar cosas por ref() para que aparezca  "Select Size:" y renderize segun cat*/}
                    <span className='size'>Select Size:   </span>
                    <div className='size-options'>
                        <div className={selected === 1 && "select"} onClick={ () => setSelected(1)}><span>134mm</span><span>Medium</span></div>
                        <div className={selected === 2 && "select"} onClick={ () => setSelected(2)}><span>134mm</span><span>Medium</span></div>
                        <div className={selected === 3 && "select"} onClick={ () => setSelected(3)}><span>134mm</span><span>Medium</span></div>
                    </div>

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
