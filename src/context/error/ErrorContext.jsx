import { useState } from "react";

export function useAxiosErrorHandler() {
  const [ errorMessage, setErrorMessage, ] = useState(null);

  function handleError(error){
    console.log("Erro: ", error); 

    if(error.response){
      const status = error.response.status;

      const message = {
        400: "Request failure", 
        401: "Credentials invalid",
        403: "Access Denied", 
        404: "Route not found",
        500: "Server erro"
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
  return {
    errorMessage, 
    setErrorMessage,
    handleError
  }
}
