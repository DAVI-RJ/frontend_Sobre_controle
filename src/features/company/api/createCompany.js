import { axiosInstance } from "@/core/http/axiosInstance";
import log from "@/core/logger/logger";

export async function createCompany(data) {
  try {
    const response = await axiosInstance.post("/company/register", data);
    return response.data;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
