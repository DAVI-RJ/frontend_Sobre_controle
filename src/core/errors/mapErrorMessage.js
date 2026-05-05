export function mapErrorMessage(status, error) {
  if (!status || !error) {
    return "Network error";
  }

  if (status >= 500) {
    return "Server error";
  }
  const messages = {
    400: "Request failure",
    401: "Credentials invalid",
    403: "Access denied",
    404: "Route not found",
  };

  if (messages[status]) {
    return messages[status];
  }
  return `Error (${status})`;
}
