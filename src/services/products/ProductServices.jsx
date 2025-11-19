import connection from "../api/ApiConnection"; 
import { useAxiosErrorHandler } from "../../context/error/ErrorContext";

export function useProductsServices() {
  const { handleError } = useAxiosErrorHandler(); 

  //carrega a lista de produtos
  const getProducts = async () => {
    try {
      const response = await connection.get("/company/:companyId/products")
      return response.data;

    }catch(error){
      handleError(error)
    }
  };

  //cadastro de produtos
  const createProduct = async (data) => {
    try{
      const response = await connection.post("/company/:companyId/products", data, {
        method: "post", 
      });
      return response.data;

    }catch(error){
      handleError(error)
    }
  }

  return { getProducts, createProduct };
}