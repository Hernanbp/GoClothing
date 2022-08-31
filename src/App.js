import {Routes, Route} from "react-router-dom"
import { Home, Login, Register, Cart } from './components/views'
import { ProductsList } from "./components/views/ProductsList/ProductsList"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
