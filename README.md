# Sobre Controle

Pequeno sistema front-end em React para gerenciamento simples de produtos e cadastro multi-step.

Designer atomic para desenvolvimento do projeto

## Visão geral
Aplicação construída com Vite + React. Possui páginas de Login, Registro (formulário em etapas) e uma Home com listagem e formulário de produtos.

## Principais arquivos e componentes
- Roteamento: [`AppRoutes`](src/routes/Index.jsx) — [src/routes/Index.jsx](src/routes/Index.jsx)  
- Entrada da aplicação: [`App`](src/App.jsx) — [src/App.jsx](src/App.jsx)  
- Boot (DOM): [src/main.jsx](src/main.jsx)  
- Página de Login: [`Login`](src/pages/login/Login.jsx) — [src/pages/login/Login.jsx](src/pages/login/Login.jsx)  
- Página de Registro (multi-step): [`Register`](src/pages/register/Register.jsx) — [src/pages/register/Register.jsx](src/pages/register/Register.jsx)  
- Página Home: [`Home`](src/pages/home/Home.jsx) — [src/pages/home/Home.jsx](src/pages/home/Home.jsx)  
- Formulário reutilizável: [`Form`](src/Components/form/Form.jsx) — [src/Components/form/Form.jsx](src/Components/form/Form.jsx)  
- Campos de formulário: [`InputComponent`](src/Components/form/formComponentes/Input.jsx), [`SelectComponent`](src/Components/form/formComponentes/Select.jsx) — [src/Components/form/formComponentes/Input.jsx](src/Components/form/formComponentes/Input.jsx), [src/Components/form/formComponentes/Select.jsx](src/Components/form/formComponentes/Select.jsx)  
- Formulário de produto: [`ProductForm`](src/Components/form/productForm/ProductForm.jsx) — [src/Components/form/productForm/ProductForm.jsx](src/Components/form/productForm/ProductForm.jsx)  
- Sidebar: [`SidebarComponent`](src/Components/siderbar/Sidebar.jsx) — [src/Components/siderbar/Sidebar.jsx](src/Components/siderbar/Sidebar.jsx)  
- Lista de estados (dados): [`statesList`](src/context/statesList.jsx) — [src/context/statesList.jsx](src/context/statesList.jsx)

## Pré-requisitos
- Node 18+ recomendado
- npm ou yarn

## Instalação
```bash
npm install
```

## Execução em desenvolvimento
```bash
npm run dev
```
(veja scripts em [package.json](package.json))

## Estrutura do projeto
- src/ - código fonte React
  - pages/ - páginas principais (login, register, home)
  - Components/ - componentes reutilizáveis (form, cards, sidebar, etc.)
  - context/ - dados estáticos e contextos
  - routes/ - [`AppRoutes`](src/routes/Index.jsx)
- index.html - host da aplicação

## Fluxos principais
- Login: formulário em [`src/pages/login/Login.jsx`](src/pages/login/Login.jsx) que usa o componente `Form`.
- Registro: fluxo multi-step em [`src/pages/register/Register.jsx`](src/pages/register/Register.jsx) composto por [`Step1`](src/Components/form/stepsRegister/Step1.jsx), [`Step2`](src/Components/form/stepsRegister/Step2.jsx) e [`Step3`](src/Components/form/stepsRegister/Step3.jsx).
- Home: alterna entre lista e formulário de produtos via [`SidebarComponent`](src/Components/siderbar/Sidebar.jsx).

## Como contribuir / próximos passos
- Validar e enviar o cadastro para um backend (ex.: json-server ou API real).
- Adicionar testes unitários para componentes e hooks.
- Melhorar validação dos formulários usando `yup` + `react-hook-form` (já presente nas dependências).
- Internacionalização / estilos responsivos.

## Observações
- O componente de input usa `react-hook-form` através de [`FormProvider`](src/Components/form/Form.jsx).
- Arquivos de estilo estão próximos aos componentes (CSS modules não usados atualmente).

## Licença
MIT 