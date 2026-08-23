import z from "zod";

export const supplierSchema = z.object({
  name: z.string().min(1, { message: "O nome do fornecedor é obrigatório" }),
  cnpj: z.string().min(1, { message: "O CNPJ é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z.string().min(1, { message: "O telefone é obrigatório" }),
});

export const setTableSuppler = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Nome",
  },
  {
    key: "cnpj",
    label: "CNPJ",
  },
  {
    key: "email",
    label: "E-mail",
  },
  {
    key: "phone",
    label: "Telefone",
  },
];
