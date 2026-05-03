import { axiosInstance } from "@/services/api/axiosInstance";
import log from "@/services/logger/logger";

export async function getProfileCompany() {
  try {
    const response = await axiosInstance.get("/company/profile");
    log.info(
      "Company profile loaded",
      { name: response?.name },
      {
        feature: "header",
      }
    );
    return response.data.name;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
