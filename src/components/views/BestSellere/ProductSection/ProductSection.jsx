import "./ProductSectionStyles.css"

import  {Product} from "../../Product"


export default function ProductSection (props) {
    const {title} = props;
  return (
    <>
      <div className="bestSellere-main">
            <div>
                <h2>{title}</h2>
                <div>
                    
                    <div>
                        <ul>
                            <li>All Products</li>
                            <li>T-Shirt</li>
                            <li>Jacket</li>
                        </ul>
                        <button>Show All</button>
                    </div>
                    <div className="bestSellere-products">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

/**
{/* LO QUE ERA <ProductsList></ProductsList> */
/* <div className="card-container"> 
{ProductZara.map( (item)=>{
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
)})
}
</div> */
/* LO QUE ERA <ProductsList></ProductsList> */