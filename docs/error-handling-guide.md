# Tratamentos de erros

## Topicos abordados: 
  * Erros de Infraestrutura/Rede.
  * Erros de Interface (UI)
  * Erros de Negócio.

### 1.Inteceptadores de erros

No começo do projeto ja havia pensado em como centralizar os erros, pois tive experiência
semelhantes no desenvolvimento beckend, como tratar os erros e passar para o usuário mensagens
amigavéis, por isso antes das implementação de algumas funcionalidades e avançar mais afundo no
desenvolvimento, construi o hook de errorContext e componente visual.

```
// errorContext

export function useAxiosErrorHandler() {
  const [ errorMessage, setErrorMessage, ] = useState(null);

  // Hook para capturar erros e lançar componente visual.
  function handleError(error){
    const status = error?.response?.status;

    if(status){
      const message = {
        400: "Request failure",
        401: "Credentials invalid",
        403: "Access Denied",
        404: "Route not found",
        500: "Server error"
      }

      setErrorMessage(message[status] || `Error (${status})`);
    }else if (error.request) {
      setErrorMessage("Server offline");
    }else {
      setErrorMessage("Error não esperado")
    }
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000)
  }
}

```

Conforme o desenvolvimento foi se tornando mais complexo, procurei sobre boas pratícas, e minha
referência veio da documentação
[solarwinds - loggly](https://www.loggly.com/blog/best-practices-for-client-side-logging-and-error-handling-in-react/),
[logleverl](https://www.npmjs.com/package/loglevel?activeTab=readme#developing--contributing).

### 2.Configurando ambiente de erro!

Foi preciso aprofundar em pesquisa, como à de como limitar os erros que quebram minha aplicação durante o uso, para isso usei o **ErrorBoundary**,
verifiquei na documentação react como usar esse componente, bem como posso complementar a camada de `perfomace`, (veja em [performace](./docs/performace.md)),
alinhada com a lib useQuery.

* Portanto nesse projeto estou trabalhando com as seguintes bibliotecas:

| Componente | Propósito | Runtime | O que trata | Manter no dev |
| :--------- | :-------: | ------: | ----------- | ------------: |
| ErrorBoundary | Capturar erros de renderização e mostrar fallback UI | Tempo de render | Erros de UI que quebram árvore de componentes | Sim — protege a app durante desenvolvimento |
| ErrorContext / handleError | Centralizar mensagens amigáveis e estado de erro para UI | Runtime React | (hooks) Mensagens para usuário, toasts, clearing | Sim — útil para UX e testes locais |
| React Query | Orquestrar fetches, cache e estados isLoading/error | Runtime dados remotos | Erros de rede e retry; fornece onError/onSettled | Sim — reduz boilerplate e facilita testes |
| Logger centralizado | Registrar erros para investigação | Dev e prod (env aware) | Logs estruturados, breadcrumbs, contexto | Sim — mesmo em dev, evita console espalhado |

- **loglevel**: Usada para tratamento de erros em ambiente de desenvolvimento, evitando uso de console
  log.

- **loglevel-plugin-remote**: Apliquei para que o meu backend receba os loggers de erros e
  documente, já que tenho configurado a biblioteca winston na stacker.

- **react-error-boundary**: Erros de UI que quebram árvore de componentesComponente responsável por
  limitar erros de quebra de componentes anteriores e lançar mensagens amigaveis ao usuário.

- **@tanstack/react-query**: Melhorar a performace da aplicação, delegando os estados dos componentes visuais de modo que tratamento de erros e loading receba status, podendo manter e acessar o status caches.
