import "./beetSellereStyles.css"

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
        <div className="beetSellere-main">
            <div>
                <h2>Best Sellers</h2>
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
                        las 4 CARDS
                    </div>
                </div>
            </div>
            
        </div>
        <div className="beetSellere-footer">
               <h2>Follow Products And Discounts On Instagram</h2>
               <ul>
                <li>foto</li>
                <li>foto</li>
                <li>foto</li>
               </ul>
               <h3>Or Suscribe To The Newsletter</h3>
               <div>
                    <p>
                    Lorem ipsum dolor.
                    </p>
                    <button>SUBMIT</button>
                </div>
               
        </div>
      </section>
    </>
  )
}
