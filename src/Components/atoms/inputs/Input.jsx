import { useFormContext } from 'react-hook-form';

import "./Input.css";

function InputComponent({ 
    label, 
    name, 
    type = 'text', 
    placeholder,
    rules = {} 
  }) {
  
    const { register, formState: { errors } } = useFormContext();

  return (
    <div className='inputClass'>
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
        <p className="errorMessage">
          {errors[name].message || 'Campo obrigatório'}
        </p>
      )}
    </div>    
  );
}

export default InputComponent;
