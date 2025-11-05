import React, { useState } from "react"

import HomeLayout from "../../Components/templates/HomeLayout";
import CardComponent from "../../Components/molecules/cards/Card";
import SidebarComponent from "../../Components/organisms/sidebar/Sidebar";

import ProductComponent from "../../Components/molecules/productForm/ProductForm";
import CustomerComponent from "../../Components/molecules/customerForm/CustomerForm";
import SupplierComponent from "../../Components/molecules/supplierForm/SupplierForm"

import initialProducts from "../../services/models/ProductService";

import "./Home.css"

export default function Home(){

  const [view, setView] = useState("list")
  const [ products, setProducts] = useState(initialProducts);

  const addProduct = (data) => {
    const newProduct = {
      id: crypto.randomUUID(),
      ...data
    }  
    setProducts(prev => [...prev, newProduct]);
    setView("list");
  };


  const renderProductList = () => {
    if (products.length === 0) return <p>Lista vazia</p>;
    return products.map((product) => (
      <CardComponent key={product.id} product={product} />
    ));
  };

  return (
    <HomeLayout>
      <SidebarComponent setView = {setView} />
      <div className="section-content">
        {view === "New Produtct" && <ProductComponent onAdd={addProduct} />}
        {view === "list Product" && renderProductList()}
        {view === "New customer" && <CustomerComponent />}
        {view === "New Supplier" && <SupplierComponent />}
      </div>
    </HomeLayout>
  )
}

