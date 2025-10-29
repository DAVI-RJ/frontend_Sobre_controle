import React, { useState } from "react"

import HomeLayout from "../../Components/templates/HomeLayout";
import CardComponent from "../../Components/molecules/cards/Card";
import SidebarComponent from "../../Components/organisms/sidebar/Sidebar";
import ProductForm from "../../Components/molecules/productForm/ProductForm";
import indexProducts from "../../services/Hooks/ProductService";

import "./Home.css"

export default function Home(){

  const [view, setView] = useState("list")
  const [ products, setProducts] = useState(indexProducts);

  const addProduct = (name) => {
    const newProduct = {
      id: products.length + 1,
      name
    }  
    setProducts(prev => [...prev, newProduct]);
    setView("list");
  };

  return (
    <HomeLayout >
      <SidebarComponent setView = {setView} />
      <section className="section-content">
        {view === "form" && <ProductForm onAdd={addProduct}/>}
        {view === "list" && products.map((product) => (
        <CardComponent key={product.id} product={product}/>))}
      </section>
    </HomeLayout>
  )
}

