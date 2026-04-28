import "react";

import { useHeader } from "@/hooks/useHeader";

import { ErrorMessage } from "@/context/error/ErrorMessage";

import "./header.css";


export default function HeaderComponent(){
  
  const { companyName, errorMessage, handleLogout } = useHeader(); 
 
  return (
    <header className="header-class">
      <div className="logo-perfil">
         {(companyName) ? <p>nome {companyName ?? '—'}</p> : 
         <ErrorMessage message={errorMessage} />}
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