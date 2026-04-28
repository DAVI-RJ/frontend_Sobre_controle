const companyFields = [
  { name: "name", label: "Nome da Empresa:", placeholder: "Entra com o nome da sua empresa", type: "text", required: true },
  { name: "email", label: "E-mail:", type: "email", placeholder: "empresa@exemplo.com", required: true },
  { name: "cnpj", label: "CNPJ:", placeholder: "Digite so número", type: "number", required: true },
  { name: "representative", label: "Nome do Representante",  placeholder:"Nome do Representante legal", type: "text", required: true },
  { name: "phone", label: "Telefone",  placeholder: "Digite so número", type: "tel", maxlength: 15 ,required: true},
]

const companyModel = []

export { 
  companyModel as default,
  companyFields
}