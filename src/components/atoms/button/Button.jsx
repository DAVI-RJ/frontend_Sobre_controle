import React from "react";
import "./Button.css"

function ButtonComponent({
  onClick, 
  type,
  children,
  className, 
  }) {
  return (
    <button 
    className={`button-class ${className}`}
    onClick={onClick}
    type= {type}
    >
      {children}
    </button>  
  );
}

export default ButtonComponent;