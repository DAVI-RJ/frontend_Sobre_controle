import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { refreshTokenService } from "../context/auth/authServices";
import { setCredentials, clearCredentials } from "../context/auth/authSlice";
import store from "@/core/store/store";

export function useAuthInitialization() {
  const sessionQuery = useQuery({
    queryKey: ["auth", "session"],
    queryFn: refreshTokenService,
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (sessionQuery.isSuccess) {
      const data = sessionQuery.data;

      store.dispatch(
        setCredentials({
          accessToken: data?.accessToken,
          user: data?.user,
        })
      );
    }

    if (sessionQuery.isError) {
      store.dispatch(clearCredentials());
    }
  }, [sessionQuery.isSuccess, sessionQuery.isError, sessionQuery.data]);

  return {
    isInitializing: sessionQuery.isPending,
    refreshSucceeded: sessionQuery.isSuccess,
    refreshFailed: sessionQuery.isError,
  };
}
