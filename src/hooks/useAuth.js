import { useState, useCallback } from "react";

import store from "@/config/store/store";
import { clearCredentials, setCredentials } from "@/context/auth/authSlice";
import { useAxiosErrorHandler } from "@/context/error/useErrorContext";
import {
  loginService,
  logoutService,
  refreshTokenService,
} from "@/context/auth/sectionAuthentication";
import log from "@/services/logger/logger";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { handleError } = useAxiosErrorHandler();

  const login = useCallback(
    async (credentials) => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const data = await loginService(credentials);
        const token = data.accessToken;
        const user = data.user;
        store.dispatch(setCredentials({ accessToken: token, user }));
        log.info("login success", { userId: user?.id });
        return data;
      } catch (error) {
        const message = error.message;
        log.error(error, { action: "login", email: credentials?.email });
        handleError?.(error, { action: "login" });
        setErrorMessage(message);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [handleError]
  );

  const logout = useCallback(async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      await logoutService();
      store.dispatch(clearCredentials());
      log.info(" logout success");
    } catch (error) {
      log.error(error, { action: "logout" });
      handleError?.(error, { action: "logout" });
      setErrorMessage(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  const refresh = useCallback(async () => {
    try {
      const data = await refreshTokenService();
      const token = data.accessToken;
      const user = data.user;
      store.dispatch(setCredentials({ accessToken: token, user }));
      log.info("refresh token success", { userId: user?.id });
      return data;
    } catch (error) {
      log.error(error, { action: "refreshToken" });
      handleError?.(error, { action: "refreshToken" });
      throw error;
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  return { login, logout, refresh, errorMessage, loading };
}
