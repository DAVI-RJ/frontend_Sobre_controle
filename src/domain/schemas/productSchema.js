import z from "zod";

export const productSchema = z.object({
  name: z.string().trim().min(1, {
    message: "o nome do produto é obrigatório",
  }),
  description: z.string().trim().min(1, {
    message: "descrição do produto é obrigatório",
  }),
  price: z.coerce
    .number({
      error: "esse campo deve ser preenchido apenas com numeros",
    })
    .positive({ message: "o valor deve ser maior que zero" }),
  quantity: z.coerce
    .number({
      error: "tem que ser um valor valído",
    })
    .int({
      message: "quantidade deve ser um número inteiro",
    }),
});

export const setTableProduct = [
  {
    key: "name",
    label: "Produto",
  },
  {
    key: "quantity",
    label: "Quantidade",
  },
  {
    key: "price",
    label: "Preço",
    render: (product) => `R$ ${Number(product.price).toFixed(2)}`,
  },
  {
    key: "options",
    label: "opções",
    type: "actions",
  },
];
