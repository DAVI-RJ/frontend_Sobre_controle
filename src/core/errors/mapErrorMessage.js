export default function mapErrorMessage(error) {
  if (error?.code === "ECONNABORTED" || error.message?.includes("timeout")) {
    return "O servidor demorou muito para responder. Tente novamente.";
  }

  if (error?.request && !error?.response) {
    return "Sem conexão com a internet ou servidor fora do ar.";
  }

  if (!error) {
    return "Ocorreu um erro inesperado na aplicação.";
  }

  const status = error.response?.status || error.status;

  if (status >= 500) {
    return "Nosso sistema está instável no momento. Tente novamente mais tarde.";
  }

  const clientMessages = {
    400: "Requisição inválida. Verifique os dados enviados.",
    401: "Sessão expirada ou credenciais inválidas. Faça login novamente.",
    403: "Você não tem permissão para acessar este recurso.",
    404: "O recurso solicitado não foi encontrado.",
    422: "Erro de validação nos dados enviados.",
  };

  if (clientMessages[status]) {
    return clientMessages[status];
  }

  // Fallback para mensagens vindas diretamente da API
  if (error.response?.data?.message) {
    return error.response.data.message;
  }

  return `Ocorreu um erro inesperado (Código: ${status || "Desconhecido"})`;
}
