import {axiosInstance} from "../services/api/axiosInstance";
import { setCredentials } from "../context/auth/authSlice"; 
import store from "../config/store/store";

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState()?.auth?.accessToken;
    if(token){
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }
);

axiosInstance.interceptors.response.use(
  (config) => config, 
  async (error) => {
    const status = error?.response?.status;
    const originalRequest = error?.config;

    if(status === 401 && !originalRequest._retry){  
      originalRequest._retry = true;
      try {
        const response = await axiosInstance.post("/refresh", {}, { withCredentials: true });
        const newToken = response.data.accessToken;
        store.dispatch(setCredentials({ accessToken: newToken }));
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

        return axiosInstance(originalRequest);
      }catch(error){
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);