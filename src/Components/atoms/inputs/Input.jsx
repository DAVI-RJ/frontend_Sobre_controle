import { useFormContext } from 'react-hook-form';

import "./Input.css";

function InputComponent({ 
    label, 
    name, 
    type, 
    placeholder,
    rules = {} 
  }) {
  
    const { register, formState: { errors } } = useFormContext();

  return (
    <div className='input-class'>
      {label && <label htmlFor={name}>{label}</label>}
      <input 
        {...register(name, {
          ...rules,
          required: rules.required || false
        })}
        type={type}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="error-message">
          {errors[name].message || 'Campo obrigatório'}
        </p>
      )}
    </div>    
  );
}

export default InputComponent;
