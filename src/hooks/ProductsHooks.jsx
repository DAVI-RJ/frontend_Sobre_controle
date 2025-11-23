import { useState, useCallback} from "react";
import { useProductsServices } from "../services/productsApi/ProductServices"; 

// hook responsável pela lógica de interface e estado
const useProducts = () => {
  const [ products, setProducts] = useState([]);
  const [ loading, setLoading] = useState(false);
  const [ errorMessage, setErrorMessage] = useState(null);

  // hook responsável pela comunicação com o backend
  const { getProducts, createProduct } = useProductsServices();

  // requisição GET/ 
  const handleProducts = useCallback(
    async () => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const data = await getProducts();
        setProducts(data || []);    
      }catch(error){
        setErrorMessage(error.message || "Erro ao carregar a lista de produtos")  
      }finally{
        setLoading(false);
      }
    },
    [ getProducts ]
  );

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