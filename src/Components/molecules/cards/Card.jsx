import React from "react";
import "./Card.css"

export default function CardComponent({product}){

  return (  
    <div className="cardClass">
      <ul>
        {<li>{product.name}</li>}
      </ul>
    </div>
  )
  
}