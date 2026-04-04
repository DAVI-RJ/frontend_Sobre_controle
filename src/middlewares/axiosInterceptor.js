import {axiosInstance} from "../services/api/axiosInstance";
import { setCredentials } from "../context/auth/authSlice"; 
import store from "../config/store/store";

// Interceptador axios para gerenciar tokens de acesso e atualizar paginas. 
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

    // IGNORA refresh token para rota de login
    const isLoginRequest = originalRequest?.url?.includes('/login');

    if(status === 401 && !originalRequest._retry && !isLoginRequest){  
      originalRequest._retry = true;
      try {
        const response = await axiosInstance.post("/refresh", {}, { withCredentials: true });
        // Cria um novo token e atualiza no headers
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