import { axiosInstance } from "@/services/api/axiosInstance";

export async function createProduct(data) {
  try{
    const response = await axiosInstance.post("/company/:companyId/products", data);

    return response.data; 
  } catch (error){  
    console.log(error)
    throw error
  }
}