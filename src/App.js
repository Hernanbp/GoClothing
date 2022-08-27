import {Routes, Route} from "react-router-dom"
import Login from "./auth/login"
import Register from "./auth/Register"
import Home from "./components/Home/Home"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
    </Routes>
  )
}

export default App
