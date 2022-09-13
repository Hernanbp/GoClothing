import axios from "axios"
import { useEffect, useState } from "react"
import SearchIcon from "@mui/icons-material/Search"

export const DashProducts = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const resp = await axios.get(
      "https://alkcommerceback.herokuapp.com/products",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    setProducts(resp.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const handleRemoveProduct = async (id) => {
    const resp = await axios.delete(
      `https://alkcommerceback.herokuapp.com/products/${id}`
    )
    setProducts(products.filter((product) => product.id !== id))

    console.log(resp)
  }

  const content = products?.map(({ title, price, category, _id }) => (
    <tr className="product-row" key={_id}>
      <td>{title}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td onClick={handleRemoveProduct(_id)}>Remove</td>
    </tr>
  ))

  return (
    <div className="content">
      <h1>Products</h1>
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search something..." />
      </div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
          {content}
        </tbody>
      </table>
    </div>
  )
}
