import "./styles.css"
import ProductZara from "../BeetSellere/ProductZara"

  // ESTA FUNC. la TENEMOS Q LLAMAR productCard:
  export function ProductsList(props) {
  return (
    <>
      <div className="card-container"> 
          <div key={props.id} className="item"> 
            <div className="item-title">
              <img src="../assets/p1.png" alt=""/>
              <button>SALE</button>
            </div >
            <div className="item-description">
              <h3> {props.description}</h3>
                <div>
                  <p> {props.category}</p>
                  <div>
                    <p className={props.beforePrice === "" ? "": "discount"}> {props.beforePrice}</p>
                    <p> {props.price}</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}
