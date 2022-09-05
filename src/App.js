import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, Cart } from "./components/views";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
