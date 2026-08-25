import { axiosInstance } from "@/core/http/axiosInstance";
import log from "@/core/logger/logger";

//carrega a lista de produtos
export async function getProducts() {
  try {
    const response = await axiosInstance.get("/company/:companyId/products");
    return response;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
