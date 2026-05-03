export function mapErrorMessage(status, error) {
  if (status) {
    const messages = {
      400: "Request failure",
      401: "Credentials invalid",
      403: "Access denied",
      404: "Route not found",
      500: "Server error",
    };
    return messages[status] || `Error (${status})`;
  } else if (error?.request && error?.response) {
    return "Server offline";
  } else if (error?.message) {
    return error.message;
  }
  return "Unexpected error";
}
