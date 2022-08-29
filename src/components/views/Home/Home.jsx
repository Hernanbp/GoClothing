import React from "react"
import { Header, Footer } from "../../views"
import brand from "../../svgs/brand.svg"
import "./styles.css"

export function Home() {
  return (
    <>
      <Header />
      <section>
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
            <img src="../assets/img001.png" alt="" />
            <img src="../assets/img002.png" alt="" />
            <img src="../assets/img003.png" alt="" />
            <img src="../assets/img004.png" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
