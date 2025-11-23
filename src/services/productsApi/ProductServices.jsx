import {axiosInstance} from "../api/axiosInstance"; 
import { useAxiosErrorHandler } from "../../context/error/ErrorContext";

export function useProductsServices() {
  const { handleError } = useAxiosErrorHandler(); 

  //carrega a lista de produtos
  const getProducts = async () => {
    try {
      const response = await axiosInstance.get("/company/:companyId/products")
      return response.data;

    }catch(error){
      handleError(error)
    }
  };

  //cadastro de produtos
  const createProduct = async (data) => {
    try{
      const response = await axiosInstance.post(`/company/:companyId/products`, data)
      return response.data;

    }catch(error){
      handleError(error)
    }
  }

  return { getProducts, createProduct };
}