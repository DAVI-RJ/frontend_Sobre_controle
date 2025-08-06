import React from "react";
import "./Sidebar.css"


export default function SidebarComponent ({setView}) {
  return (
    <div className="Sidebar-class">
      <button onClick={() => setView("form")}>Formulario</button>
      <button onClick={() => setView("list")}>Lista</button>
    </div>
  )
}