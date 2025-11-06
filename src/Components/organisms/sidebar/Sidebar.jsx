import React, { useState } from "react";
import ButtonComponent from "../../atoms/button/Button";

import "./Sidebar.css";

// Itens do menu
const menuItems = {
  products: [
    { id: "list-products", label: "Lista de Produtos", view: "list Product" },
    { id: "new-product", label: "Novo Produto", view: "New Product" }
  ],
  customers: [
    { id: "new-customer", label: "Novo Cliente", view: "New Customer" }
  ],
  supplier: [
    { id: "new-supplier", label: "Novo Fornecedor", view: "New Supplier" }
  ]
};

export default function SidebarComponent({ setView }) {
  // Estado para controlar seções abertas
  const [openSections, setOpenSections] = useState({
    products: false,
    customers: false,
    supplier: false
  });

  // Alterna visibilidade da seção
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], 
    }));
  };

  return (
    <aside className="sidebar">
      {/* PRODUTOS */}
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

      {/* CLIENTES */}
      <nav className={`nav-button ${openSections.products ? "ativado" : ""}`}>
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

      {/* FORNECEDORES */}
      <nav className={`nav-button ${openSections.products ? "ativado" : ""}`}>
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
