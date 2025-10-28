import React, { useState } from "react";

import ButtonComponent from "../../atoms/button/Button"
import "./Sidebar.css"

// func = funcionalidade

let funcObject= [
  { id: "Novo cliente",
    view: (setView) => setView ("form")
  },
  { id: "Lista Produtos", 
    view: (setView) => setView("list")
  },
  { id: "Novo Produto",
    view: (setView) => setView("formProduto")
  }
]

export default function SidebarComponent ({setView}) {
  
  const [ optionId, setOptionId ] = useState(funcObject[0].id);

  funcObject.find(func => func.id === setOptionId);

  return (
  <div className="sidebarClass">
      {funcObject.map((func) => (
      <ButtonComponent 
        key={func.id}
        type="button"
        onClick={() => func.view(setView)}
      >
        {func.id}
    </ButtonComponent>
    ))}
    </div>
  )
}