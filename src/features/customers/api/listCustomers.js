import { axiosInstance } from "@/core/http/axiosInstance";

export async function listCustomers() {
  const response = await axiosInstance.get("/customers/company");
  return response.data;
}
