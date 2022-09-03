import "./styles.css"
import ProductZara from "../BeetSellere/ProductZara"

  // ESTA FUNC. la TENEMOS Q LLAMAR productCard:
  export function ProductsList(item) {
  return (
    <>
      <div className="card-container"> 
        {
        ProductZara.map( (item)=>{
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
            </div>
          </div>
          )})
          }
    </>);
    }
