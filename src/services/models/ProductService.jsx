import { useEffect, useState } from "react";
import connection from "../api/ApiConnection";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    connection.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Erro na API:", err));
  }, []);

  return products;
};

export const productModel = [
  { name: "name", label: "Nome do produto:", type: "text", required: true, placeholder: "Nome do produto"},
  { name: "price", label: "Preço:", type:"number", required: true, placeholder: "Digite um valor 00,0"},
  { name: "quantity", label: "Quantidade:", type:"number", required: true, placeholder: "Quantidade de produto"},
  { name: "description", label: "Descrição:", type:"textarea", required: true, placeholder:"Descrição do produto"},
];
