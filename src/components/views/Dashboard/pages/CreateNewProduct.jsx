import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const CreateNewProduct = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)

  const [products, setProducts] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resp = await axios.post(
      "https://alkcommerceback.herokuapp.com/products",
      {
        title,
        description,
        price,
        image: "https://picsum.photos/200/300",
        category: "Electronics",
      }
    )

    setProducts([...products, resp.data])
    console.log(title)
  }

  return (
    <form className="form-dashboard" onSubmit={handleSubmit}>
      <h2>Add a new Product</h2>
      <label htmlFor="title">title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="title">description</label>
      <textarea
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="title">price</label>
      <input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <div className="buttons-dashboard">
        <Link to="/dashboard/products">
          <button>Cancel</button>
        </Link>
        <button>Publish Product</button>
      </div>
    </form>
  )
}
