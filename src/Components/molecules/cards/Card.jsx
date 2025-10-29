import React from "react";

import "./Card.css"



export default function CardComponent({product}){

  return (  
    <div className="card">
      <ul>
        <li>{product?.name || product?.nome}</li>
      </ul>
    </div>
  )
  
}