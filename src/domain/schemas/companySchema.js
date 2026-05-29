import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(3, "Nome inválido"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  cnpj: z.string().min(14, "CNPJ inválido"),
  representative: z.string().min(2, "Responsável inválido"),
  password: z.string().min(6, "Senha curta"),
  passwordConfirm: z.string(),
  address_id: z.number().int().positive(),
});
