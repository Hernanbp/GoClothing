import "./AllProductsStyles.css"

import  {ProductsList} from "../ProductsList/ProductsList"


export default function AllProducts(props) {
    const {title} = props;
  return (
    <>
      <div className="beetSellere-main">
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
                    <div className="beetSellere-products">
                        <ProductsList></ProductsList>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
