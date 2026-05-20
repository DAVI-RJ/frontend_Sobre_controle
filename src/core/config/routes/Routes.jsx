import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import Home from "@/pages/home/Home";
import ErrorPage from "@/shared/components/molecules/errors/ErrorPage";
//import ProductComponent from '@/components/molecules/productForm/ProductForm'
//<Route path="/home/product/register" element={<ProductComponent />} />

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage status={404} />} />
      </Routes>
    </BrowserRouter>
  );
}
