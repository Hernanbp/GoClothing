import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, Cart, ProductDetail, ProductsPage } from "./components/views";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:_id" element={<ProductDetail />} />

    </Routes>
  );
};

export default App;
