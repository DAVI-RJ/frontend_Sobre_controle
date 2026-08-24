import { axiosInstance } from "@/core/http/axiosInstance";
import { clearCredentials, setCredentials } from "@/core/context/auth/authSlice";
import store from "@/core/store/store";
import log from "@/core/logger/logger";

// Interceptador axios para gerenciar tokens de acesso e atualizar paginas.
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState()?.auth?.accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    log.error({
      message: error.message,
      feature: "intercepter",
    });
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },

  async (error) => {
    const status = error?.response?.status;
    const originalRequest = error?.config;

    // logica de refresh token
    const isLoginRequest = originalRequest?.url?.includes("/login");

    if (status === 401 && !originalRequest._retry && !isLoginRequest) {
      originalRequest._retry = true;
      try {
        log.info("Tentando refresh token...");
        const response = await axiosInstance.post("/refresh", {}, { withCredentials: true });
        // Cria um novo token e atualiza no headers
        const newToken = response?.accessToken;
        const user = response?.user;
        store.dispatch(setCredentials({ accessToken: newToken, user }));
        log.info("Token renovado com sucesso");
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        log.error("Falha ao renovar token - redirecionando para login", {
          feature: "axiosInterceptor",
          error: refreshError.message,
        });
        store.dispatch(clearCredentials());
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
