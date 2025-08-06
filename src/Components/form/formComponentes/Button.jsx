import React from "react";
import "./Button.css"

function ButtonComponent(props) {
  return (
    <button className='buttonClass' onClick={props.onClick}>
      {props.children}
    </button>  
  );
}

export default ButtonComponent;