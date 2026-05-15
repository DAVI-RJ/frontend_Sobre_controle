# 📂 Estrutura do Projeto

### Como está organizada a estruturada do projeto:

Quando o assunto sobre DDD 

- **[core](../src/core/)** : Configuração central, context, roteamento, store, http client, middleware. 
- **[domain](../src/domain/)** : Modelos de dados e schemas.
- **[feature](../src/features/)** : Features isoladas para manter as funcionalidades de cada grupo customers, products, companies e suppliers separadas. 
- **[shared](../src/shared/)** : Componentes reutilizáveis (atoms, molecules, organisms).

```
.
├── app
│   └── App.jsx
├── core 
│   ├── config
│   │   └── routes
│   │       └── Routes.jsx
│   ├── context
│   │   ├── auth
│   │   │   ├── authServices.js
│   │   │   └── authSlice.js
│   │   └── error
│   │       ├── error-boundary
│   │       │   ├── error-boundary.css
│   │       │   └── ErrorBoundary.jsx
│   │       ├── errorContext.js
│   │       └── ErrorProvider.jsx
│   ├── errors
│   │   └── mapErrorMessage.js
│   ├── http
│   │   └── axiosInstance.js
│   ├── logger
│   │   └── logger.js
│   ├── middlewares
│   │   └── axiosInterceptor.js
│   ├── store
│   │   └── store.js
│   └── utils
├── domain 
│   ├── models
│   │   ├── addressModel.js
│   │   ├── companyModel.js
│   │   ├── customersModel.js
│   │   ├── productModel.js
│   │   └── supplierModel.js
│   ├── schemas
│   │   └── index.js
│   └── services
│       └── addressApi
│           └── AddressApi.js
├── features 
│   ├── company
│   │   ├── api
│   │   │   ├── createCompany.js
│   │   │   ├── profileCompany.js
│   │   │   └── __queryOptions.js
│   │   └── hooks
│   ├── customers
│   │   ├── api
│   │   │   ├── createCustomer.js
│   │   │   └── listCustomers.js
│   │   ├── components
│   │   │   └── ListCustomers.jsx
│   │   └── hooks
│   │       └── useCustomer.js
│   ├── products
│   │   ├── api
│   │   │   ├── createProduct.js
│   │   │   └── listProducts.js
│   │   └── hooks
│   │       └── useProducts.js
│   └── supplirs
├── index.css
├── main.jsx
├── pages
│   ├── home
│   │   ├── Home.jsx
│   │   └── home-style.css
│   ├── login
│   │   ├── Login.jsx
│   │   └── login-style.css
│   └── register
│       ├── Register.jsx
│       └── register-style.css
└── shared 
    ├── assets
    │   └── bg-login.png
    ├── components
    │   ├── atoms
    │   │   ├── button
    │   │   │   ├── button.css
    │   │   │   └── Button.jsx
    │   │   ├── errors
    │   │   │   └── ErrorMessage.jsx
    │   │   ├── inputs
    │   │   │   ├── input.css
    │   │   │   ├── Input.jsx
    │   │   │   └── inputMask.jsx
    │   │   └── select
    │   │       └── Select.jsx
    │   ├── molecules
    │   │   ├── cards
    │   │   │   ├── card.css
    │   │   │   └── Card.jsx
    │   │   ├── customerForm
    │   │   │   ├── customer-form.css
    │   │   │   └── CustomerForm.jsx
    │   │   ├── form
    │   │   │   ├── form.css
    │   │   │   └── Form.jsx
    │   │   ├── listComponent
    │   │   │   ├── list-group.css
    │   │   │   └── ListGroup.jsx
    │   │   ├── productForm
    │   │   │   ├── product-form.css
    │   │   │   └── ProductForm.jsx
    │   │   ├── stepsRegister
    │   │   │   ├── Step1.jsx
    │   │   │   ├── Step2.jsx
    │   │   │   ├── Step3.jsx
    │   │   │   └── steps.css
    │   │   └── supplierForm
    │   │       ├── supplier-form.css
    │   │       └── SupplierForm.jsx
    │   ├── organisms
    │   │   ├── container
    │   │   │   ├── container.css
    │   │   │   └── Container.jsx
    │   │   ├── dashboard
    │   │   │   ├── dashboard.css
    │   │   │   └── Dashboard.jsx
    │   │   ├── footer
    │   │   │   ├── footer.css
    │   │   │   └── Footer.jsx
    │   │   ├── header
    │   │   │   ├── header.css
    │   │   │   └── Header.jsx
    │   │   ├── loading
    │   │   │   ├── loading-class.css
    │   │   │   └── LoadingComponent.jsx
    │   │   ├── sidebar
    │   │   │   ├── sidebar.css
    │   │   │   └── Sidebar.jsx
    │   │   └── wave
    │   │       ├── WaveComponent.jsx
    │   │       └── wave.css
    │   └── templates
    │       ├── home-layout.css
    │       ├── HomeLayout.jsx
    │       ├── loginLayout
    │       │   ├── login-layout.css
    │       │   └── LoginLayout.jsx
    │       └── registerlayout
    │           ├── register-layout.css
    │           └── RegisterLayout.jsx
    └── hooks
        ├── useAuth.js
        ├── useHeader.js
        └── useMultiStep.js

```
