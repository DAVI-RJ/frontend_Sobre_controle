import { axiosInstance } from "@/core/http/axiosInstance";

export const createSupplier = async (data) => {
  const response = await axiosInstance.post("/company/:companyId/supplier", data);
  return response.data;
};
