# 🔒 Segurança e Autenticação

A segurança foi uma das prioridades deste projeto. Implementamos um fluxo robusto de autenticação para mitigar vulnerabilidades comuns como XSS (Cross-Site Scripting) e CSRF (Cross-Site Request Forgery).
🛡️ Estratégia de Gerenciamento de Tokens

### localStorage vs cookie for storing tokens

Em vez de armazenar tokens sensíveis puramente no localStorage (onde ficam expostos a scripts maliciosos), adotei uma estratégia híbrida:

- Access Token: Utilizado para autenticar requisições via header Authorization: Bearer.

- Refresh Token: Gerenciado via Cookies httpOnly. Isso garante que o token de renovação não seja acessível via JavaScript, protegendo-o contra ataques XSS.

- Armazenamento (Store): O estado da autenticação é gerenciado pelo Redux Toolkit, garantindo que o accessToken esteja disponível na memória da aplicação de forma reativa.

### 🔄 Fluxo de Autenticação com Axios

Utilizamos Interceptadores do Axios para criar uma experiência de usuário fluida:

- Request Interceptor: Anexa automaticamente o accessToken ao header de cada requisição.

- Response Interceptor: Monitora erros 401 (Não autorizado). Caso o token expire, o interceptador pausa as requisições, chama a rota de Refresh Token e, após o sucesso, tenta novamente as requisições originais.

### 🧪 Validação e Integridade

- Schema Validation (Yup): Todas as entradas de dados nos formulários de login e cadastro são validadas com Yup. Isso previne o envio de payloads malformados ao backend e melhora a experiência do usuário.
- Payloads: O payload do JWT é tratado para garantir que apenas informações não sensíveis sejam lidas no front-end.

### 🛠️ Tecnologias Utilizadas nesta Camada

- Redux Toolkit: Gerenciamento de estado global e persistência segura.

- Axios: Configuração de instâncias globais e interceptadores.

- Yup: Validação de esquemas de dados.

- JWT (JSON Web Tokens): Padrão para troca segura de informações.
