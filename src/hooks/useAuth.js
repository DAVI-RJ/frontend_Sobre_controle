/* // hooks/useAuth.js - SIMPLIFICADO

import { useState, useCallback } from "react";
import store from "@/config/store/store";
import { clearCredentials, setCredentials } from "@/context/auth/authSlice";
import { useError } from "@/context/error/ErrorProvider";
import {
  loginService,
  logoutService,
} from "@/context/auth/sectionAuthentication";
import log from "@/services/logger/logger";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const { handleError } = useError();

  // ===== LOGIN (Ação Explícita) =====
  const login = useCallback(
    async (credentials) => {
      setLoading(true);
      try {
        const data = await loginService(credentials);
        
        if (!data?.accessToken) {
          throw new Error("Resposta inválida: accessToken ausente");
        }

        // Atualiza Redux (primeira vez)
        store.dispatch(
          setCredentials({ 
            accessToken: data.accessToken, 
            user: data.user 
          })
        );

        log.info("✅ Login bem-sucedido", { userId: data.user?.id });
        return data;

      } catch (error) {
        handleError(error, { action: "login" });
        log.error("❌ Falha no login", { 
          action: "login", 
          email: credentials?.email,
          error: error.message 
        });
        throw error;

      } finally {
        setLoading(false);
      }
    },
    [handleError]
  );

  // ===== LOGOUT (Ação Explícita) =====
  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await logoutService();
      store.dispatch(clearCredentials());
      log.info("✅ Logout bem-sucedido");

    } catch (error) {
      // Mesmo com erro, limpa localmente (segurança)
      store.dispatch(clearCredentials());
      
      handleError(error, { action: "logout" });
      log.error("❌ Erro ao fazer logout", { 
        action: "logout",
        error: error.message 
      });
      throw error;

    } finally {
      setLoading(false);
    }
  }, [handleError]);

  // ❌ Remover: refresh manual (o interceptador já faz!)
  // const refresh = useCallback(async () => { ... }); // DELETAR!

  return { login, logout, loading }; // Sem refresh
}

*/
import { useState, useCallback } from "react";

import store from "@/config/store/store";
import { clearCredentials, setCredentials } from "@/context/auth/authSlice";
import { useError } from "@/context/error/ErrorProvider";
import { loginService, logoutService } from "@/context/auth/sectionAuthentication";
import log from "@/services/logger/logger";

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
        log.error("falha login", { action: "login", email: credentials?.email }, "mesag", error.message);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [handleError]
  );

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await logoutService();
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
