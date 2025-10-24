import React from "react";
import "./Sidebar.css"


export default function SidebarComponent ({setView}) {
  return (
    <div className="sidebarClass">
      <button onClick={() => setView("form")}>Formulario</button>
      <button onClick={() => setView("list")}>Lista</button>
      <button onClick={() => setView("list")}>Lista Produtos</button>
      <button onClick={() => setView("list")}>Listar Fornecedores</button>
      <button onClick={() => setView("list")}>Listar Clientes</button>
      <button onClick={() => setView("list")}>Novo Produto</button>
    </div>
  )
}