const productModel = [
  { name: "name", label: "Nome do produto", type: "text", required: true, placeholder: "Nome do produto"},
  { name: "price", label: "Preço", type:"number", required: true, placeholder: "Digite uma valor 0,0"},
  { name: "quantity", label: "Quantidade", type:"number", required: true, placeholder: "Quantidade de produto"},
  { name: "description", label: "Descrição", type:"textarea", required: true, placeholder:"Descrição do produto"},
];

const initialProducts = [];

export {
  initialProducts as default,
  productModel
};