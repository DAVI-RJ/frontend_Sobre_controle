import z from "zod";

export const customerSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  cnpj: z.string().min(14, "O CNPJ é obrigatório"),
  email: z.string().email("O email deve ser válido"),
  phone: z.string().min(10, "Telefone inválido"),
  addressId: z.number().int().positive(),
});

export const setTableCustomers = [
  {
    key: "cnpj",
    label: "CNPJ",
  },
  {
    key: "name",
    label: "Nome",
  },
  {
    key: "pedidos",
    label: "Nº de Pedidios"
  },
  {
    key: "options",
    label: "opções",
    type: "actions",
  },
];
