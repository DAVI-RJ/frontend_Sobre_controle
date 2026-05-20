import React from "react";
import style from "./button.module.css";

function ButtonComponent({ onClick, type, children, className }) {
  return (
    <button className={`${style.button} ${className || ""}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default ButtonComponent;
