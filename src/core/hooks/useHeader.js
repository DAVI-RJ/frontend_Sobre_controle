import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { useAuth } from "./useAuth";
import { getCompanyProfileQueryOptions } from "@/features/company/api/__queryOptions";

export function useHeader() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  // Usa queryOptions centralizado
  const profileQuery = useQuery(getCompanyProfileQueryOptions());

  const handleLogout = useCallback(async () => {
    await logout();
    navigate("/");
  }, [logout, navigate]);

  return {
    companyName: profileQuery.data,
    errorMessage: profileQuery.error?.message,
    loading: profileQuery.isLoading,
    isError: profileQuery.isError,
    handleLogout,
    refetch: profileQuery.refetch, //  Poder fazer refetch manual se quiser
  };
}
