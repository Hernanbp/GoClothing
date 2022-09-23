import axios from "axios"
import React, { useState } from "react"
import FileBase64 from "react-file-base64"
import { Link } from "react-router-dom"

export const UpdateProduct = () => {
  const [products, setProducts] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const [id, setId] = useState("")

  const handleUpdate = async (e) => {
    e.preventDefault()

    const resp = await axios.put(
      `https://alkcommerceback.herokuapp.com/products/${id}`,
      {
        title,
        description,
        price,
        image,
        category: "Clothes",
      }
    )

    setProducts([...products, resp.data])
    console.log(resp.data)
  }

  return (
    <form onSubmit={handleUpdate} className="form-dashboard">
      <h2>Update a Product</h2>
      <label htmlFor="id">ID</label>
      <input
        type="text"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="title">Description</label>
      <textarea
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="title">Price</label>
      <input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="image">Image</label>
      <FileBase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => setImage(base64)}
      />
      <div className="buttons-dashboard">
        <Link to="/dashboard/products">
          <button>Cancel</button>
        </Link>
        <button>Update Product</button>
      </div>
    </form>
  )
}
