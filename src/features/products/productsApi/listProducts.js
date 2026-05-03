import { axiosInstance } from "@/services/api/axiosInstance"; 

//carrega a lista de produtos
export async function getProducts() {
  try {
    const response = await axiosInstance.get("/company/:companyId/products")
    return response;

  }catch(error){
    console.log(error)
    throw error
  }
};

