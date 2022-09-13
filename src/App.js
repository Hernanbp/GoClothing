import { Routes, Route } from "react-router-dom"
import { Home, Login, Register, Cart } from "./components/views"
import { ProductsList } from "./components/views/ProductsList/ProductsList"
import { BeetSellere } from "./components/views/BeetSellere"
import { Dashboard } from "./components/views/Dashboard/Dashboard"
import { Products } from "./components/views/Dashboard/pages/Products"
import { CreateNewProduct } from "./components/views/Dashboard/pages/CreateNewProduct"
import { UpdateProduct } from "./components/views/Dashboard/pages/UpdateProduct"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/zara" element={<BeetSellere />} />
      <Route path="/" element={<Dashboard />}>
        <Route path="products" element={<Products />} />
        <Route path="updateProduct" element={<UpdateProduct />} />
        <Route path="createNewProduct" element={<CreateNewProduct />} />
      </Route>
    </Routes>
  )
}

export default App
