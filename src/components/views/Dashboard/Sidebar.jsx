import React from "react"
import { Link } from "react-router-dom"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import UpdateIcon from "@mui/icons-material/Update"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard/products">
            <ShoppingBasketIcon />
            Products
          </Link>
        </li>
        <li>
          <Link to="/dashboard/createNewProduct">
            <AddCircleIcon />
            Create New Product
          </Link>
        </li>
        <li>
          <Link to="/dashboard/updateProduct">
            <UpdateIcon />
            Update Product
          </Link>
        </li>
      </ul>
    </div>
  )
}
