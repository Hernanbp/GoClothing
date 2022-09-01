import "./BeetSellereStyles.css"
import  AllProducts  from "./AllProducts"


export function BeetSellere() {
  return (
    <>
      <section className="beetSellere-section">
        <div className="beetSellere-header">
            {
                /*
                Es la palabra ZARA, de fondo, GRIS
                <img src="./img/zaraLogo.png" alt="NO EXISTE LA IMG" />
                */
            }
            
            <div>
                <h1>ZARA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur id accusantium minima. Dolores ratione, asperiores sint numquam.</p>
                <button>See Collection</button>
            </div>
        </div>
        <AllProducts title={"New Product"}></AllProducts>
        <AllProducts title={"Best Sellers"}></AllProducts>
        <div className="beetSellere-footer">
            <h2>Follow Products And Discounts On Instagram</h2>

            <ul>
                <li><img src="./img/ig01.png" alt="" /></li>
                <li><img src="./img/ig02.png" alt="" /></li>
                <li><img src="./img/ig03.png" alt="" /></li>
                <li><img src="./img/ig04.png" alt="" /></li>
                <li><img src="./img/ig05.png" alt="" /></li>
                <li><img src="./img/ig06.png" alt="" /></li>
            </ul>

            <h3>Or Suscribe To The Newsletter</h3>

            <div>
                <input type="email" placeholder="Email Address..."/>
                <button type="submit">SUBMIT</button>
            </div>
        </div>
      </section>
    </>
  )
}
