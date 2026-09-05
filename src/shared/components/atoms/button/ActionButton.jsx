import style from "./action.module.css"

export default function ActionButton({
  icon,
  label,
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={style.action}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
    >
      {icon}
    </button>
  );
}