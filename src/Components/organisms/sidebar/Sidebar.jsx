import React, { useState } from "react";
import ButtonComponent from "../../atoms/button/Button"

import "./Sidebar.css"

// func = funcionalidade

const menuItems = {
  products: [
    { id: "list-products", label: "Product List", view: "list" },
    { id: "new-product", label: "New Product", view: "formProduto" }
  ],
  customers: [
    { id: "new-customer", label: "New Customer", view: "formCliente" }
  ]
};

export default function SidebarComponent ({setView}) {
  return (
    <aside className="sidebar">
      <nav className="nav-button">
        <h3>Products</h3>
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
        <h3>Customers</h3>
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
    </aside>
  )
}