import style from "./card.module.css";

export default function CardComponent({children}) {
  return (
    <div className={style.card}>
      {children}
    </div>
  );
}
