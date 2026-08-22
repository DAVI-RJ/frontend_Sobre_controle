import z from "zod";

export const supplierSchema = z.object({
  name: z.string().min(1, { message: "O nome do fornecedor é obrigatório" }),
  cnpj: z.string().min(1, { message: "O CNPJ é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z.string().min(1, { message: "O telefone é obrigatório" }),
});

export const setTableSuppler = supplierSchema.map((culomns, status) => [
  {
    key: culomns.id,
    label: culomns.name,
  },
  {
    key: culomns.cnpj,
    label: culomns.cnpj,
  },
  {
    key: culomns.email,
    label: culomns.email,
  },
  {
    key: status,
    label: status,
  },
]);
