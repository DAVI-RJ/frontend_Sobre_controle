import React, { Children, useState } from "react"

import HomeLayout from "../../Components/templates/HomeLayout";

import CardComponent from "../../Components/molecules/cards/Card";
import SidebarComponent from "../../Components/organisms/siderbar/Sidebar";
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
    <HomeLayout className="pageHomeClass">
     <div setView = {setView}>
        {view === "form" && <ProductForm onAdd={addProducts}/>}
        {view === "list" && products.map((product) => (
        <CardComponent key={product.id} product={product}/>))}
      </div>
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