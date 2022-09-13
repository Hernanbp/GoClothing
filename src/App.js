import { BestSellers } from "./components/views/BestSellers"
import { Dashboard } from "./components/views/Dashboard/Dashboard"
import { DashProducts } from "./components/views/Dashboard/pages/DashProducts"
import { CreateNewProduct } from "./components/views/Dashboard/pages/CreateNewProduct"
import { UpdateProduct } from "./components/views/Dashboard/pages/UpdateProduct"
import { Routes, Route } from "react-router-dom"
import {
  Home,
  Login,
  Register,
  Cart,
  ProductDetail,
  ProductsPage,
} from "./components/views"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/zara" element={<BestSellers />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/products" element={<DashProducts />} />
        <Route path="/dashboard/updateProduct" element={<UpdateProduct />} />
        <Route
          path="/dashboard/createNewProduct"
          element={<CreateNewProduct />}
        />
      </Route>

      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:_id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
