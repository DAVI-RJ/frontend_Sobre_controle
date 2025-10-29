import React from "react";

import "./Card.css"



export default function CardComponent({product}){
  if(!product) return null; 

  return (  
    <div className="card">
      <div>
        <h3>{product?.name}</h3>
      </div>
      <div className="card-details">
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    </div>
  )
}