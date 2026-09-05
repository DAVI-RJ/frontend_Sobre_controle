import { axiosInstance } from "@/core/http/axiosInstance";
import log from "@/core/logger/logger";

export async function destroyProduct(id) {
  try {
    const response = await axiosInstance.delete(`/company/:companyId/products/${id}`);
    return response.data;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
