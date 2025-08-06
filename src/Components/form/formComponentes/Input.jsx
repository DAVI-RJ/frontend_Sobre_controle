import { useFormContext } from 'react-hook-form';

import "./Input.css"

function InputComponent(props) {

  const {register, formState: { errors } } = useFormContext();

  return (
    <div className='inputClass'>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...register( props.name, {required: true})}
        id={props.name}
        name={props.name}
        value={props.value}
        type={props.type || 'text'}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {errors[props.name]?.type == "required" && (
        <p>Campo obrigatorio</p>
      )}     
    </div>    
  );
}

export default InputComponent;

/*import React from 'react';
import { useFormContext } from 'react-hook-form';

import "./Input.css"

function InputComponent({props}) {

  const {register, formState: { errors } } = useFormContext();

  return (
    <div className='inputClass'>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...register( props.name, {required: true})}
        id={props.name}
        name={props.name}
        value={props.value}
        type={props.type || 'text'}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {errors[props.name]?.type == "required" && (
        <p>Campo obrigatorio</p>
      )}     
    </div>    
  );
}

export default InputComponent;
/*


import React from 'react';
import { useFormContext } from 'react-hook-form';
import "./Input.css"

function InputComponent(props) {
  let register, errors; 

  try{
    const methods = useFormContext();
    register = methods.register;
    errors = methods.formState.errors;
  }catch{
    register = null;
    errors = {}
  }
  

  return (
    <>
    <div className='inputClass'>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        id={props.name}
        name={props.name}
        type={props.type || 'text'}
        placeholder={props.placeholder}
        {...(register ? register(props.name, {required: props.required}): {
        value: props.value,  
        onChange: props.onChange,
        })}
      />
      {errors[props.name]?.type == "required" && (
        <p>Campo obrigatorio</p>
      )}     
    </div>
    </>  
    
  );
}

export default InputComponent;

*/
