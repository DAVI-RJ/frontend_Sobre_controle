import React, { useState } from "react";
import ButtonComponent from "../../atoms/button/Button"

import "./Sidebar.css"

//funcionalidade

const menuItems = {
  products: [
    { id: "list-products", label: "Lista de Produtos", view: "list Product" },
    { id: "new-product", label: "Novo Produto", view: "New Produtct" }
  ],
  customers: [
    { id: "new-customer", label: "Novo Cliente", view: "New customer" }
  ],
  supplier: [
    {id: "new-supplier", label: "Novo Fornecedor", view: "New Supplier"}
  ]
};

export default function SidebarComponent ({setView}) {
  return (
    <aside className="sidebar">
      <nav className="nav-button">
        <h4>PRODUTOS</h4>
        {menuItems.products.map((item) => (
        <ButtonComponent 
          key={item.id}
          type="button"
          onClick={() => setView(item.view)}
        >
          {item.label}
        </ButtonComponent>
        ))}
      </nav>
      <nav className="nav-button">
        <h4>CLIENTES</h4>
        {menuItems.customers.map((item) => (
        <ButtonComponent 
          key={item.id}
          type="button"
          onClick={() => setView(item.view)}
        >
          {item.label}
        </ButtonComponent>
        ))}
      </nav>       
       <nav className="nav-button">
        <h4>FORNECEDORES</h4>
        {menuItems.supplier.map((item) => (
        <ButtonComponent 
          key={item.id}
          type="button"
          onClick={() => setView(item.view)}
        >
          {item.label}
        </ButtonComponent>
        ))}
      </nav>       
    </aside>
  )
}