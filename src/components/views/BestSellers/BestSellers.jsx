import "./styles.css"
import  ProductSection  from "./ProductSection/ProductSection"

export function BestSellers() {
  return (
    <>
      <section className="bestSellers-section">
        <div className="bestSellers-header">
            <div>
                <h1>ZARA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur id accusantium minima. Dolores ratione, asperiores sint numquam.</p>
                <button>See Collection</button>
            </div>
        </div>
        <ProductSection title={"New Product"}></ProductSection>
        <ProductSection title={"Best Sellers"}></ProductSection>
        <div className="bestSellers-footer">
            <h2>Follow Products And Discounts On Instagram</h2>

            <ul>
                <li><img src="../assets/ig01.png" alt="NO se encutgenas" /></li>
                <li><img src="../assets/ig02.png" alt="NO se encutgenas" /></li>
                <li><img src="../assets/ig03.png" alt="NO se encutgenas" /></li>
                <li><img src="../assets/ig04.png" alt="NO se encutgenas" /></li>
                <li><img src="../assets/ig05.png" alt="NO se encutgenas" /></li>
                <li><img src="../assets/ig06.png" alt="NO se encutgenas" /></li>
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
