import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'
import Home from '../../pages/home/Home'
import ProductComponent from '../../components/molecules/productForm/ProductForm'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/produtos/novo" element={<ProductComponent />} />
      </Routes>
    </BrowserRouter>
  )
}