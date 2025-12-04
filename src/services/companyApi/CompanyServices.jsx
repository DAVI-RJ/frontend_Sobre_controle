import { axiosInstance } from "../api/axiosInstance"
import { useAxiosErrorHandler } from "../../context/error/ErrorContext";


export function useCompanyServices(){
  const {handleError} = useAxiosErrorHandler();

  const createCompany = async (dataCompany) => {
    try {
      const response = await axiosInstance.post("/company/register", dataCompany);
      return response.data;
    }catch(error){
      handleError(error);
    }
  }

  return { createCompany};
}