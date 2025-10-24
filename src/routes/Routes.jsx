import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Home from '../pages/home/Home'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}