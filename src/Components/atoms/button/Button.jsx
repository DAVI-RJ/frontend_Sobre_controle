import React from "react";
import "./Button.css"

function ButtonComponent({
  onClick, 
  type 
  }) {
  return (
    <button className='buttonClass' 
    onClick={onClick}
    type= {type}
    >
    </button>  
  );
}

export default ButtonComponent;