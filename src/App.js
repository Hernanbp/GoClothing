import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, Cart } from "./components/views";
import { ProductsList } from "./components/views/ProductsList/ProductsList";

import { BeetSellere } from "./components/views/BeetSellere";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/zara" element={<BeetSellere />} />
    </Routes>
  );
};

export default App;
