import React from "react";
import "./Button.css"

function ButtonComponent({
  onClick, 
  type,
  children
  }) {
  return (
    <button className='buttonClass' 
    onClick={onClick}
    type= {type}
    >
      {children}
    </button>  
  );
}

export default ButtonComponent;