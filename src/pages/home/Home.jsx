import React, { Children, useState } from "react"

import CardComponent from "../../Components/Cards/Card"
import SidebarComponent from "../../Components/siderbar/Sidebar"
import ProductForm from "../../Components/form/productForm/ProductForm"

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
    <div className="Home-page-class">
      <div>
        <SidebarComponent setView={setView}/>
      </div>
    
      <main className="main-class">
        {view === "form" && <ProductForm onAdd={addProducts} />}
        {view === "list" && products.map((product) => (
          <CardComponent key={product.id} product={product}/>
        ))}
      </main>
    </div>
  )
}