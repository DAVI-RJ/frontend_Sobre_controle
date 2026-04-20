import { useAxiosErrorHandler } from "../../../context/error/ErrorContext";
import { axiosInstance } from "../../../services/api/axiosInstance";

export function CustomerServices(){
  const {handleError} = useAxiosErrorHandler(); 

  const getCustomers = async () => {
    try{
      const response = await axiosInstance.get("/company/customers/list")
      return response.data;

    } catch (error){
      handleError(error)
    }
  }

  // função para criar novos clientes
  const createCustomer = async (dataCustomer) => {
    try {
      const response = await axiosInstance.post("/company/customer", dataCustomer)

      return response.data; 

    } catch (error) {
      handleError(error)
    }
  }
  
  return {getCustomers, createCustomer}
}