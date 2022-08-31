import { Header, Footer } from "../../views"
import brand from "../../svgs/brand.svg"
import "./styles.css"

export function Home() {
  const products = [
    {
      img: "../assets/img001.png",
      name: "Jacket",
      quantity: 103,
    },
    {
      img: "../assets/img002.png",
      name: "Jacket",
      quantity: 103,
    },
    {
      img: "../assets/img003.png",
      name: "Dress",
      quantity: 55,
    },
    {
      img: "../assets/img004.png",
      name: "Jacket",
      quantity: 103,
    },
  ]

  return (
    <>
      <Header />
      <section className="home-section">
        <div className="container-home">
          <div className="brands">
            <img src={brand} alt="" />
          </div>
        </div>
        <div className="featured-products">
          <div className="main-product">
            <p>Explore new and popular styles</p>
            <img src="../assets/img00.png" alt="" />
          </div>
          <div className="grid-products">
            {products.map(({ img, name, quantity }) => (
              <div className="img-container">
                <img src={img} alt="" />
                <div className="tooltip">
                  <p>{name}</p>
                  <p>{quantity} Products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
