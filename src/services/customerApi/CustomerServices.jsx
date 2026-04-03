import { useAxiosErrorHandler } from "../../context/error/ErrorContext";
import { axiosInstance } from "../api/axiosInstance";

export function CustomerServices(){
  const {handleError} = useAxiosErrorHandler(); 

  const createCustomer = async (dataCustomer) => {
    try {
      const response = await axiosInstance.post("/company/customer", dataCustomer)

      return response.data; 

    } catch (error) {
      handleError(error)
    }
  }
  
  return {createCustomer}
}