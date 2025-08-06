import React from 'react';

import { useNavigate } from 'react-router-dom'

import Form from '../../Components/form/Form';
import WaveBackground from '../../Components/container/container';
import InputComponent from '../../Components/form/formComponentes/Input';


import "./Login.css"

export default function Login() {
  
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log('Login:', data);
  };

  return (
    <div className='backimg'>
      <div className='animate'>
        <WaveBackground />
          <div className='pagesLoginClass'> 
            <h1> Login in InOrder</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci</p>
          <Form onSubmit={handleLogin}>
            <InputComponent
              name="email"
              type="email"
              label="email:"
              placeholder="Digite seu email"
            />
            <InputComponent 
              name="password"
              type="password"
              label="password:"
              placeholder="Digite sua senha"
            />

            <button type="submit" >Entrar</button>
            <button type="button" onClick={() => navigate('/register')}>
              Não tenho cadastro
            </button>
          </Form>
        </div>  
      </div>
    </div>
  )
}

/*
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form';

import InputComponent from '../../Components/form/formComponentes/Input';
import Form from '../../Components/form/Form';
import WaveBackground from '../../Components/container/container';

import "./Login.css"

export default function Login() {
  
  const navigate = useNavigate();
  const methods = useForm();

  const  onSubmit = (data) => console.log('Login:', data)   
  
  return (

    <div className='backimg'>

      <div className='animate'>
        <WaveBackground />
    
        <FormProvider {...methods} >
          <div className='pagesClass'> 
            <h1> Login in InOrder</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci.
            </p>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="loginClass" >
              <InputComponent
                name="email"
                type="email"
                label="email:"
                placeholder="Digite seu email"       
              />

              <InputComponent 
                name="password"
                type="password"
                label="password:"
                placeholder="Digite sua senha"
              />

              <button type="submit" onClick={() => navigate('/home')}>Entrar</button>
              <button type="button" onClick={() => navigate('/register')}>
                Não tenho cadastro
              </button>
            </form>
          </div>  
        
        </FormProvider>
      </div>  
    </div>
  )
}
*/