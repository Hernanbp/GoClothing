import axios from "axios"
import { useEffect, useState } from "react"
import SearchIcon from "@mui/icons-material/Search"

export const DashProducts = () => {
  // const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [dataFromApi, setDataFromApi] = useState([])
  const [content, setContent] = useState([])

  useEffect(() => {
    ;(async function () {
      try {
        const res = await axios.get(
          "https://alkcommerceback.herokuapp.com/products"
        )
        setDataFromApi(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const handleRemoveProduct = async (id) => {
    const resp = await axios.delete(
      `https://alkcommerceback.herokuapp.com/products/${id}`
    )
    setDataFromApi(dataFromApi.filter((product) => product.id !== id))

    console.log(resp)
  }

  useEffect(() => {
    setContent(
      dataFromApi?.map(({ title, price, category, _id }) => (
        <tr className="product-row" key={_id}>
          <td>{title}</td>
          <td>{category}</td>
          <td>${price}</td>
          <td onClick={() => handleRemoveProduct(_id)}>Remove</td>
        </tr>
      ))
    )
  }, [dataFromApi])

  const handleSubmitSearch = (e) => {
    e.preventDefault()
  }

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      setContent(
        dataFromApi?.map(({ title, price, category, _id }) => (
          <tr className="product-row" key={_id}>
            <td>{title}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td onClick={() => handleRemoveProduct(_id)}>Remove</td>
          </tr>
        ))
      )
    }

    const filtered = dataFromApi.filter(
      (product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        product.category.toLowerCase().includes(e.target.value.toLowerCase())
    )

    if (e.target.value) {
      setContent(
        filtered.map(({ title, price, category, _id }) => (
          <tr className="product-row" key={_id}>
            <td data-label="Name">{title}</td>
            <td data-label="Category">{category}</td>
            <td data-label="Price">${price}</td>
            <td data-label="Actions" onClick={() => handleRemoveProduct(_id)}>
              Remove
            </td>
          </tr>
        ))
      )
    }
  }

  return (
    <div className="content">
      <h1>Products</h1>
      <form className="search" onSubmit={handleSubmitSearch}>
        <button>
          <SearchIcon />
        </button>
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Search something..."
        />
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </tbody>
          <tbody>{content}</tbody>
        </table>
      )}
    </div>
  )
}
