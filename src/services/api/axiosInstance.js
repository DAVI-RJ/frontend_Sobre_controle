import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // envia cookies automaticamente
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
}); 
