import { useState } from "react";
import { useProductsServices } from "../services/products/ProductServices"; 

// hook responsável pela lógica de interface e estado
const useProducts = () => {
  const [ products, setProducts] = useState([]);
  const [ loading, setLoading] = useState(false);
  const [ errorMessage, setErrorMessage] = useState(null);

  // hook responsável pela comunicação com o backend
  const { getProducts, createProduct } = useProductsServices();

  // requisição GET/ 
  const handleProducts =  async () => {
    setLoading(true);
    
    try {
      const data = await getProducts();
      setProducts(data || []);
      
    }catch(error){
      setErrorMessage(error.message || "Erro ao carregar a lista de produtos")  

    }finally{

      setLoading(false);
    }
  }

  // cadastro de produtos, POST/
  const addProduct = async (data) => {
    try {
      const newProduct = await createProduct(data); 
      setProducts((prev) => [ newProduct, ...prev])
      
    }catch(error){
      setErrorMessage(error.message || "Erro ao cadastrar o produto" )
    }
  }

   return {
    products,
    loading,
    errorMessage,
    handleProducts,
    addProduct,
  }
};

export default useProducts; 