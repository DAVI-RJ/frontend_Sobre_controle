import { axiosInstance } from "@/core/http/axiosInstance";
import log from "@/core/logger/logger";

export async function createProduct(data) {
  try {
    const response = await axiosInstance.post("/company/:companyId/products", data);
    return response.data;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
