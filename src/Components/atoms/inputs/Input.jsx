import { useFormContext } from 'react-hook-form';

import "./Input.css";

function InputComponent({ 
    id,
    label, 
    name, 
    type, 
    placeholder,
    rules = {} 
  }) {
    
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className='input-class'>
      {label && <label htmlFor={id}>{label}</label>}
      <input 
        {...register(name, {
          ...rules,
          required: rules.required || false
        })}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="error-message">
          {errors[name].message }
        </p>
      )}
    </div>    
  );
}

export default InputComponent;
