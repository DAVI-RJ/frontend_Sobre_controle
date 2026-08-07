import { useFormContext } from "react-hook-form";

import style from "./input.module.css";

function InputComponent({ id, label, name, type, className, placeholder, rules = {} }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${style.input} ${className || ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={className || ""}
        {...register(name, {
          ...rules,
          required: rules.required || false,
        })}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      {errors[name] && <p className={style.error}>{errors[name].message}</p>}
    </div>
  );
}

export default InputComponent;
