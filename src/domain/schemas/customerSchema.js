import z from "zod";

export const customerSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  cnpj: z.string().min(14, "O CNPJ é obrigatório"),
  email: z.string().email("O email deve ser válido"),
  phone: z.string().min(10, "Telefone inválido"),
  address_id: z.number().int().positive(),
});

export const setTableCustomer = customerSchema.map((columns) => [
  {
    key: columns.id,
    label: columns.name,
  },
]);
