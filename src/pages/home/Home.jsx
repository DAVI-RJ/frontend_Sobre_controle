import React, { Children, useState } from "react"

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
    <div className="pageHomeClass">
      <header>
        Ola meu povo
      </header>

      <SidebarComponent setView = {setView}></SidebarComponent>
      <main>



      <div>
        {view === "form" && <ProductForm onAdd={addProducts}/>}
        {view === "list" && products.map((product) => (
        <CardComponent key={product.id} product={product}/>))}
      </div>

      </main>
    </div>
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

*/