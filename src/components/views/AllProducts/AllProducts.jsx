import "./AllProductsStyles.css"
import ProductZara from "../BeetSellere/ProductZara"
import  {ProductsList} from "../ProductsList/ProductsList"


export default function AllProducts(props) {
    //const [fetchedData, setFetchedData] = useState(null)
    // useEffect(() => {
    //     (async function () {
    //       const res = await fetch('https://fakestoreapi.com/products')
    //       const apiData = await res.json()
    //       console.log(apiData)
    //       setFetchedData(apiData)
    //     })()
    //   },[])
    
    // {fetchedData && fetchedData.map( (item)=>{
    //     return (
    //     <div key={item.id} className="item"> 
    //       <h2>{item.title} </h2>
    //       <img src={item.image} alt=""/>
    //       <p> {item.rating.rate} Estrellitas</p>
    //       <p> {item.price}</p>
    //       <p> {item.category}</p>
    //       <h6> {item.description}</h6>
    //     </div>
    //     )})
    //   }
    // </div>
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

                {/* LO QUE ERA <ProductsList></ProductsList> */}
                    {ProductZara.map( (item)=>{
                    return (
                        <ProductsList 
                        key={item.id} 
                        description={item.description}
                        category={item.category}
                        price={item.price}
                        beforePrice ={item.beforePrice} 
                         />
                        )}
                    )}
                {/* LO QUE ERA <ProductsList></ProductsList> */}
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

{/* LO QUE ERA <ProductsList></ProductsList> */}
{/* <div className="card-container"> 
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
</div> */}
{/* LO QUE ERA <ProductsList></ProductsList> */}