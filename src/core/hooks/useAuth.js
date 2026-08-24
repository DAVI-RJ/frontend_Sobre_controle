import { useState, useCallback } from "react";

import store from "@/core/store/store";
import { clearCredentials, setCredentials } from "@/core/context/auth/authSlice";
import { useError } from "@/core/context/error/ErrorProvider";
import { loginService, logoutService } from "@/core/context/auth/authServices";
import log from "@/core/logger/logger";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const { handleError } = useError();

  const login = useCallback(
    async (credentials) => {
      setLoading(true);
      try {
        const data = await loginService(credentials);

        store.dispatch(
          setCredentials({
            accessToken: data.accessToken,
            user: data.user,
          })
        );
        return data;
      } catch (error) {
        handleError(error);
        log.error(
          "falha login",
          { action: "login", email: credentials?.email },
          "status",
          error.message
        );
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [handleError]
  );

  const logout = useCallback(() => {
    setLoading(true);
    try {
      logoutService();
      store.dispatch(clearCredentials());
      log.info(" logout success");
    } catch (error) {
      handleError(error, { action: "logout" });
      log.error(error, { action: "logout" });
      throw error;
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  return { login, logout, loading };
}
