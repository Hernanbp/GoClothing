import axios from "axios"
import { useEffect, useState } from "react"
import SearchIcon from "@mui/icons-material/Search"

export const DashProducts = () => {
  // const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [dataFromApi, setDataFromApi] = useState([])
  
  useEffect(() => {
    (async function () {
      try{
        const res = await axios.get('https://alkcommerceback.herokuapp.com/products')
        console.log(res.data)
        setDataFromApi(res.data)
        setLoading(false)
      }
      catch(err){
        console.log(err)
      }
    })()
  },[])

  const handleRemoveProduct = async (id) => {
    const resp = await axios.delete(`https://alkcommerceback.herokuapp.com/products/${id}`)
    setDataFromApi(dataFromApi.filter((product) => product.id !== id))

    console.log(resp)
  }

  const content = dataFromApi?.map(({ title, price, category, _id }) => (
    <tr className="product-row" key={_id}>
      <td>{title}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td onClick={() => handleRemoveProduct(_id)}>Remove</td>
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
