import "./styles.css"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../svgs/logo.svg"



export function Navbar() {
  return (
    <nav className="navbar">
        <div className="top"> 
          {<SearchIcon />}
          <img src={logo} alt />
          <div> 
            {<PersonIcon />}
            {<ShoppingBagIcon />}
            {/* {<MenuIcon />}       */}
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
  )
}
