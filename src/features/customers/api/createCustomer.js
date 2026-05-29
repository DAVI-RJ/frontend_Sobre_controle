import { axiosInstance } from "@/core/http/axiosInstance";
import { customerSchema } from "@/domain/schemas/customerSchema";

export async function createCustomer(data) {
  const validatedData = customerSchema.parse(data);
  const response = await axiosInstance.post("/company/:companyId/customer", validatedData);

  return response.data;
}
