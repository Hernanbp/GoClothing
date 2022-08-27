import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Home />} />
      <Route to="/login" element={<Login />} />
      <Route to="/register" element={<Register />} />
      <Route to="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
