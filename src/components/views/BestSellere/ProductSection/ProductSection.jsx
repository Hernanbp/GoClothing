import "./ProductSectionStyles.css"

import  {Product} from "../../Product/Product"


export default function ProductSection(props) {
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
