import { useState, useCallback} from "react";

import { useAxiosErrorHandler } from "@/context/error/useErrorContext";
import { getProducts } from "../productsApi/listProducts";
import { createProduct } from "../productsApi/createProduct";

// hook responsável pela interface, erros e estado
const useProducts = () => {
  const [ products, setProducts] = useState([]);
  const [ loading, setLoading] = useState(false);
  const { errorMessage, setErrorMessage } = useAxiosErrorHandler();

  // requisição GET/ 
  const handleProducts = useCallback(
    async () => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const data = await getProducts();
        setProducts(data || []);    
      }catch(error){
        setErrorMessage(errorMessage == error.message || "error loarding list products")  
      }finally{
        setLoading(false);
      }
    },[getProducts]);

  // cadastro de produtos, POST/
  const addProduct = useCallback(
    async (data) => {
      try {
        const newProduct = await createProduct(data); 
        setProducts((prev) => [ newProduct, ...prev])
        return newProduct;

      }catch(error){
        setErrorMessage(error.message || "Erro ao cadastrar o produto" )
      }
    },
    [createProduct]
  );

   return {
    products,
    loading,
    errorMessage,
    handleProducts,
    addProduct,
  }
};

export default useProducts; 