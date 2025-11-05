import axios from "axios";
import { useEffect } from "react";

const productModel = [
  { name: "name", label: "Nome do produto", type: "text", required: true, placeholder: "Nome do produto"},
  { name: "price", label: "Preço", type:"number", required: true, placeholder: "Digite uma valor 0,0"},
  { name: "quantity", label: "Quantidade", type:"number", required: true, placeholder: "Quantidade de produto"},
  { name: "description", label: "Descrição", type:"textarea", required: true, placeholder:"Descrição do produto"},
];

const initialProducts = () => {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
    .then(res => setDados(res.data))
    .catch(err => console.error('Erro na API:', err));
  }, []);
}

export {
  initialProducts as default,
  productModel
};