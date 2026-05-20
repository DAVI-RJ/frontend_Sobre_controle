import style from "./card.module.css";

export default function CardComponent({ product }) {
  return (
    <div className={style.card}>
      <div>
        <h3>{product?.name}</h3>
      </div>
      <div className={style["card-details"]}>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    </div>
  );
}
