import { useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';
import "./Input.css";

function InputComponentMask({ 
  id,
  label, 
  name, 
  type, 
  placeholder,
  rules = {} 
}) {
  const { register, formState: { errors } } = useFormContext();

  // Define a máscara com base no tipo
  const getMask = () => {
    switch (type) {
      case "telefone":
        return "(99) 99999-9999";
      case "cpf":
        return "999.999.999-99";
      case "cnpj":
        return "99.999.999/9999-99";
      default:
        return null;
    }
  };

  const mask = getMask();
  const commonProps = {
    ...register(name, rules),
    id,
    placeholder,
  };

  return (
    <div className='input-class'>
      {label && <label htmlFor={id}>{label}</label>}

      {mask ? (
        <InputMask mask={mask} {...commonProps}>
          {(inputProps) => <input type="text" {...inputProps} />}
        </InputMask>
      ) : (
        <input type={type} {...commonProps} />
      )}

      {errors[name] && (
        <p className="error-message">
          {errors[name].message || 'Campo obrigatório'}
        </p>
      )}
    </div>    
  );
}

export default InputComponentMask;
