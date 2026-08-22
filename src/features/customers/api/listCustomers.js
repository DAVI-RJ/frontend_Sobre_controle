import { axiosInstance } from "@/core/http/axiosInstance";

export async function listCustomers() {
  const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/customers/list`);
  return response.data;
}
