import "./styles.css"
import { useState } from "react"
import PersonIcon from "@mui/icons-material/Person"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"
import logo from "../../svgs/logo.svg"
import { useResize } from "../../hooks/useResize"
import {Link} from "react-router-dom"

export function Navbar() {
  const [show, setShow] = useState()
  const { phoneScreen } = useResize()

  const handleToggle = ()=>{
    setShow((prevState) => !prevState)
  }

  return (
    <div className="nav-container">
        {phoneScreen ? (
            <nav className="navbar_phone">
              <img src={logo} alt="e-commerce" />
              <div className="navbar_svg">
                {<PersonIcon />}
                {<ShoppingBagIcon />}
                <MenuIcon onClick={handleToggle}/>
              </div>
              <div className={show ? "showing": "hidden"}>
                <p>Jewelry & Accessories</p>
                <p>Clothing & Shoes</p>
                <p>Home & Living</p>
                <p>Wedding & Party</p>
                <p>Toys & Entertainment</p>
                <p>Art & Collectibles </p>
                <p>Craft Supplies & Tools </p>
              </div>
           </nav>
        ) : (
          <nav className="navbar_desktop">
            <div className="top">
              {<SearchIcon />}
              <img src={logo} alt="e-commerce" />
              <div>
                {<PersonIcon />}
                {/* {<ShoppingBagIcon />} */}
                {<Link to="/cart"> <ShoppingBagIcon /> </Link>}
              </div>
            </div>
          <div className="bottom">
            <p>Jewelry & Accessories</p>
            <p>Clothing & Shoes</p>
            <p>Home & Living</p>
            <p>Wedding & Party</p>
            <p>Toys & Entertainment</p>
            <p>Art & Collectibles </p>
            <p>Craft Supplies & Tools </p>
          </div>
        </nav>
        )}
    </div>
  )
}
