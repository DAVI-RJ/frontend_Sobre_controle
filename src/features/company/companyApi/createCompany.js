import { axiosInstance } from "@/services/api/axiosInstance";
import log from "@/services/logger/logger";

export async function createCompany(data) {
  try {
    const response = await axiosInstance.post("/company/register", data);
    return response.data;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
