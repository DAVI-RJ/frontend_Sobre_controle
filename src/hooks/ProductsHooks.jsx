import { useEffect, useState } from "react";
import connection from "../services/api/ApiConnection";

export const useProducts = () => {
  const [ products, setProducts] = useState([]);
  const [ loading, setLoading] = useState(false);
  const [ errorMessage, setErrorMessage] = useState(null);

  async function handleProducts() {
    try {
      setLoading(true)
      const response = await connection.get("/products");
      setProducts(response.data)
      setErrorMessage(null)
    }catch(error){
      setTimeout(() => {setErrorMessage(error)}, 5000)
    }finally{
      setTimeout(() => {setLoading(false)}, 1000);
    }
  }
  useEffect(() => {
    handleProducts();
  },[]);

  return (
    products, 
    loading, 
    errorMessage, 
    setProducts, 
    handleProducts
  )
};