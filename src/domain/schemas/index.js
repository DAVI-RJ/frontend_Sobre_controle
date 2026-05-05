import * as yup from 'yup';


const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().password().required()
}); 

export default LoginSchema; 
