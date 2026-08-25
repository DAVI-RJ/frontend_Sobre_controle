import { axiosInstance } from "@/core/http/axiosInstance";
import { companySchema } from "@/domain/schemas/companySchema";
import log from "@/core/logger/logger";

export async function createCompany(data) {
  try {
    const companyData = companySchema.parse(data);
    const response = await axiosInstance.post("/company/register", companyData);
    return response;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
