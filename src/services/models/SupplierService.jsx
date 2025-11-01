const supplierFildes = [
  { name: "supplier", label: "Nome do Fornecedor:", type: "text", required: true },
  { name: "cnpj", label: "CNPJ:", type: "text", required: true },
  { name: "email", label: "E-mail:", type: "email", required: true },
  { name: "Phone", label: "Telefone Fornecedor", type: "telefone", required: true },
]

const supplierModel = []; 

export { supplierModel as default, supplierFildes}