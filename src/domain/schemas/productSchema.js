import z from "zod";

export const productSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  description: z.string().optional(),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().min(1, { message: "Category is required" }),
  stock: z.number().int().nonnegative({ message: "Stock must be a non-negative integer" }),
  status: z.enum(["active", "inactive"], { message: "Status must be either active or inactive" }),
  imageUrl: z.string().url({ message: "Image URL must be a valid URL" }).optional(),
});

export const setTableProduct = productSchema.map((columns) => [
  {
    key: columns.name,
    label: "Produto",
  },
  {
    key: columns.category,
    label: "Categoria",
  },
  {
    key: columns.stock,
    label: "Quatidade",
  },
  {
    key: columns.price,
    label: "preço",
    render: (product) => `R$ ${Number(product.price).toFixed(2)}`,
  },
  {
    key: columns.status,
    label: "Status",
    render: (product) => (
      <span className="product-status">{product.quantity > 0 ? "Em estoque" : "Sem estoque"}</span>
    ),
  },
]);
