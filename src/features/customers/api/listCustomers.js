import { axiosInstance } from "@/core/http/axiosInstance";
import log from "@/core/logger/logger";

export async function getCustomers() {
  try {
    const response = await axiosInstance.get("/company/customers/list");
    return response.data;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
