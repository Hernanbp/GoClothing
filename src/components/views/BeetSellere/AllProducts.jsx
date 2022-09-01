import "./BeetSellereStyles.css"

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
                    <div>
                        {
                        //un MAP de las CARDS
                        }
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}
