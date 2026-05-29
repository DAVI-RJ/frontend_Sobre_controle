import { z } from "zod";

export const addressSchema = z.object({
  street: z.string().min(1, "Rua obrigatória"),
  number: z.string().min(1, "Número obrigatório"),
  city: z.string().min(1, "Cidade obrigatória"),
  neighborhood: z.string().min(1, "Bairro obrigatório"),
  state: z.string().length(2, "UF inválida"),
  zip: z.string().min(8, "CEP inválido"),
});
