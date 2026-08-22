import { axiosInstance } from "@/core/http/axiosInstance";

export async function listSuppliers() {
  const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/suppliers/list`);
  return response.data;
}
