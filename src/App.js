import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route to="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
