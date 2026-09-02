import z from "zod";

export const productSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  description: z.string().optional(),
  price: z.number().positive({ message: "Price must be a positive number" }),
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
