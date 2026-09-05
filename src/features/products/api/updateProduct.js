import { axiosInstance } from "@/core/http/axiosInstance";
import log from "@/core/logger/logger";

export async function updateProduct(data) {
  try {
    const response = await axiosInstance.put(`/company/:companyId/products/${data.id}`, data);
    return response.data;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
