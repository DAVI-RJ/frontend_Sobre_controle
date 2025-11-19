export const getStatusResponse = (status) =>{

  const message = {
    400: "Request failure", 
    401: "Credentials invalid",
    403: "Access Denied", 
    404: "Route not found",
    500: "Server erro"
  }

  return message[status] || "error not difined"; 

}
