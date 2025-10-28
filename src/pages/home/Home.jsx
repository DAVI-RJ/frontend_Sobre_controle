import React, { useState } from "react"

import HomeLayout from "../../Components/templates/HomeLayout";
import CardComponent from "../../Components/molecules/cards/Card";
import SidebarComponent from "../../Components/organisms/sidebar/Sidebar";
import ProductForm from "../../Components/molecules/productForm/ProductForm";

import "./Home.css"

export default function Home(){

  const [view, setView] = useState("list")
  const [ products, setProducts] = useState([
    {id: 1, name: "cafe"}
  ]);

  const addProducts = (name) => {
    const newProduct = {
      id: products.length + 1,
      name: name
    };
    setProducts([...products, newProduct]);
  };

  return (
    <HomeLayout >
      <SidebarComponent setView = {setView} />
      <section>
        {view === "form" && <ProductForm onAdd={addProducts}/>}
        {view === "list" && products.map((product) => (
        <CardComponent key={product.id} product={product}/>))}
      </section>
    </HomeLayout>
  )
}


  /*
  const [view, setView] = useState("list")
  const [ products, setProducts] = useState([
    {id: 1, name: "cafe"}
  ]);

  const addProducts = (name) => {
    const newProduct = {
      id: products.length + 1, 
      name: name
    }; 
    setProducts([...products, newProduct]);
  };

    <SidebarComponent setView = {setView}></SidebarComponent>
      <main>



      <div>
        {view === "form" && <ProductForm onAdd={addProducts}/>}
        {view === "list" && products.map((product) => (
        <CardComponent key={product.id} product={product}/>))}
      </div>

      </main>
*/