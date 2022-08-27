//dependencies
import { Routes, Route } from "react-router-dom";
//components
import Login from "./auth/login";
import Register from "./auth/Register";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route to="/cart" element={"CART"} />
    </Routes>
  );
};

export default App;
