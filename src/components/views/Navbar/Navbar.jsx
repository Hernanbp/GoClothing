import "./styles.css"
import { useState } from "react"
import PersonIcon from "@mui/icons-material/Person"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"
import logo from "../../svgs/logo.svg"
import { useResize } from "../../hooks/useResize"

export function Navbar() {
  const [show, setShow] = useState()
  const { phoneScreen } = useResize()

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="top">
          {<SearchIcon />}
          <img src={logo} alt="e-commerce" />
          <div>
            {<PersonIcon />}
            {<ShoppingBagIcon />}
          </div>
        </div>

        {phoneScreen ? (
          <div className="bottom-phone-show">
            <MenuIcon />
          </div>
        ) : (
          <div className="bottom">
            <p>Jewelry & Accessories</p>
            <p>Clothing & Shoes</p>
            <p>Home & Living</p>
            <p>Wedding & Party</p>
            <p>Toys & Entertainment</p>
            <p>Art & Collectibles </p>
            <p>Craft Supplies & Tools </p>
          </div>
        )}

        {/* <div className="bottom"> 
          <p>Jewelry & Accessories</p>
          <p>Clothing & Shoes</p>  
          <p>Home & Living</p>  
          <p>Wedding & Party</p>  
          <p>Toys & Entertainment</p>
          <p>Art & Collectibles </p>
          <p>Craft Supplies & Tools </p>
        </div> */}
      </nav>
    </div>
  )
}
