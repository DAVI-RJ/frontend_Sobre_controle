import React, { useState } from "react"
import HomeLayout from "../../Components/templates/HomeLayout";
import CardComponent from "../../Components/molecules/cards/Card";
import SidebarComponent from "../../Components/organisms/sidebar/Sidebar";
import ProductForm from "../../Components/molecules/productForm/ProductForm";
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
    <HomeLayout >
      <SidebarComponent setView = {setView} />
      <section className="section-content">
        {view === "formProduto" && <ProductForm onAdd={addProduct} />}
        {view === "list" && renderProductList()}
        {view === "list" && <CustomerForm />}
      </section>
    </HomeLayout>
  )
}

