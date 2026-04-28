// src/features/company/companyApi/queryOptions.js
import { queryOptions } from "@tanstack/react-query";
import { getProfileCompany } from "./profileCompany";

// Define keys e funções em um lugar
export const companyQueryOptions = {
  all: () => ["company"],
  profile: () => [...companyQueryOptions.all(), "profile"],
};

// Exporta como queryOptions (reutilizável)
export function getCompanyProfileQueryOptions() {
  return queryOptions({
    queryKey: companyQueryOptions.profile(),
    queryFn: async () => {
      const profile = await getProfileCompany();
      return profile;
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}
