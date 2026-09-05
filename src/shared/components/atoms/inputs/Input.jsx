import { useFormContext, get } from "react-hook-form";

import style from "./input.module.css";

function InputComponent({ id, label, name, type = "text", className, placeholder, rules = {} }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldId = id || name;
  const isTextarea = type === "textarea";

  const fieldError = get(errors, name);
  const errorId = `${fieldId}-error`;

  const fieldRegister = register(name, rules);

  return (
    <div className={`${style.input} ${className || ""}`}>
      {label && <label htmlFor={fieldId}>{label}</label>}

      {isTextarea ? (
        <textarea
          id={fieldId}
          placeholder={placeholder}
          aria-invalid={!!fieldError}
          aria-describedby={fieldError ? errorId : undefined}
          {...fieldRegister}
        />
      ) : (
        <input
          id={fieldId}
          placeholder={placeholder}
          type={type}
          aria-invalid={!!fieldError}
          aria-describedby={fieldError ? errorId : undefined}
          {...fieldRegister}
        />
      )}
      {fieldError && (
        <p id={errorId} className={style.error} role="alert">
          {fieldError.message}
        </p>
      )}
    </div>
  );
}

export default InputComponent;
