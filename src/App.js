//dependencies
import { Routes, Route } from "react-router-dom";
//components
import { Home, Login, Register, Cart } from "./components/views";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
