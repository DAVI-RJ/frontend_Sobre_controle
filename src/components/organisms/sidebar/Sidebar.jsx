import React, { useState } from "react";
import ButtonComponent from "../../atoms/button/Button";

import "./Sidebar.css";

// Itens do menu
const menuItems = {
  products: [
    { id: "list-products", label: "Lista de Produtos", view: "list-products" },
    { id: "new-product", label: "Novo Produto", view: "new-product" }
  ],
  customers: [
    { id: "new-customer", label: "Novo Cliente", view: "new-customer" }
  ],
  supplier: [
    { id: "new-supplier", label: "Novo Fornecedor", view: "new-supplier" }
  ]
};

// Estado para controlar seções abertas 
// Alterna visibilidade da seção

export default function SidebarComponent({ setView }) {
 
  const [openSections, setOpenSections] = useState({
    products: false,
    customers: false,
    supplier: false
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], 
    }));
  };

  return (
    <aside className="sidebar">
     
      <nav className={`nav-button ${openSections.products ? "ativado" : ""}`}>
        <ButtonComponent 
        onClick={() => toggleSection("products")}
        >
          PRODUTOS {openSections.products ? "▼" : "▶"} 
        </ButtonComponent>
        {openSections.products && (
          <>
            {menuItems.products.map((item) => (
              <ButtonComponent
                key={item.id}
                type="button"
                onClick={() => setView(item.view)}
              >
                {item.label}
              </ButtonComponent>
            ))}
          </>
        )}
      </nav>

      <nav className={`nav-button ${openSections.customers ? "ativado" : ""}`}>
        <ButtonComponent onClick={() => toggleSection("customers")}>
          CLIENTES {openSections.customers ? "▼" : "▶"} 
        </ButtonComponent>
        {openSections.customers && (
          <>
            {menuItems.customers.map((item) => (
              <ButtonComponent
                key={item.id}
                type="button"
                onClick={() => setView(item.view)}
              >
                {item.label}
              </ButtonComponent>
            ))}
          </>
        )}
      </nav>
      
      <nav className={`nav-button ${openSections.supplier ? "ativado" : ""}`}>
        <ButtonComponent onClick={() => toggleSection("supplier")}>
          FORNECEDORES {openSections.supplier ? "▼" : "▶"} 
        </ButtonComponent>
        {openSections.supplier && (
          <>
            {menuItems.supplier.map((item) => (
              <ButtonComponent
                key={item.id}
                type="button"
                onClick={() => setView(item.view)}
              >
                {item.label}
              </ButtonComponent>
            ))}
          </>
        )}
      </nav>
    </aside>
  );
}
