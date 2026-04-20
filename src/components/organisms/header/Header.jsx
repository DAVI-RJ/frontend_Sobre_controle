import "react";

import { useHeader } from "@/hooks/headerHooks";

import "./Header.css";

export default function HeaderComponent(){
  
  const { nameCompany, handleLogout } = useHeader(); 

  return (
    <header className="header-class">
      <div className="logo-perfil">
         <p>{nameCompany}</p>
      </div>
      <div>
        <nav >
          <ul className="option-header">
            <li>Suporte</li>
            <li onClick={handleLogout}>Sair</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}