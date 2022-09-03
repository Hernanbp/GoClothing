import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, Cart } from "./components/views";

import { BestSellere } from "./components/views/BestSellere";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/zara" element={<BestSellere />} />
    </Routes>
  );
};

export default App;
