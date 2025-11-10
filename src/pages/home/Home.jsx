import React, { useState } from "react"
import HomeLayout from "../../Components/templates/HomeLayout";
import CardComponent from "../../Components/molecules/cards/Card";
import SidebarComponent from "../../Components/organisms/sidebar/Sidebar";
import ProductComponent from "../../Components/molecules/productForm/ProductForm";
import CustomerComponent from "../../Components/molecules/customerForm/CustomerForm";
import SupplierComponent from "../../Components/molecules/supplierForm/SupplierForm";
import { productModel } from "../../models/ProductService";
import { useProducts } from "../../hooks/ProductsHooks"; 


import "./Home.css"


export default function Home(){

  const [view, setView] = useState("list")
  const products = useProducts()

  const addProduct =  (data) => {
    const newProduct = {
      productModel,
      ...data
    };

    prev => [...prev, newProduct];
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
        {view === "new-product" && <ProductComponent onAdd={addProduct} />}
        {view === "list-products" && renderProductList()}
        {view === "new-customer" && <CustomerComponent />}
        {view === "new-supplier" && <SupplierComponent />}
      </div>
    </HomeLayout>
  )
}

