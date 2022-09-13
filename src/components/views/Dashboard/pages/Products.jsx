import axios from "axios"
import { useEffect, useState } from "react"
import SearchIcon from "@mui/icons-material/Search"

export const Products = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const resp = await axios.get("http://localhost:3500/product", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    setProducts(resp.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const content = products?.map(
    ({ title, image, description, price, category, _id }) => (
      <div key={_id}>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>${price}</p>
        <p>{category}</p>
      </div>
    )
  )

  return (
    <div className="content">
      <h1>Products</h1>
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search something..." />
      </div>
      {content}
    </div>
  )
}
