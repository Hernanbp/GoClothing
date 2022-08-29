import { BagIcon, FlowerPatternOne } from "../../svgs"
import "./styles.css"

export const Header = () => {
  return (
    <header>
      <FlowerPatternOne className="FlowerPatternOne" />
      <div className="container">
        <div className="call-to-action">
          <h1>Collections</h1>
          <p>
            you can explore any shop many different collections from
            various brands are here.
          </p>
          <div className="shop-now" type="button">
            <a href="#shop">
              <BagIcon stroke="#fff" />
              shop now
            </a>
          </div>
        </div>

        <div className="header-container-img">
          <img src="../assets/image-product.png" alt="" />
        </div>
      </div>
    </header>
  )
}
