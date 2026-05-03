/* eslint-disable react-refresh/only-export-components */

import React, { useState, useContext } from "react";
import { ErrorContext } from "./errorContext";
import { mapErrorMessage } from "@/utils/StatusResponse";

export function ErrorProvider({ children }) {
  const [error, setError] = useState(null);

  function handleError(err, context = {}) {
    const status = err?.response?.status;
    const message = mapErrorMessage(status, err);
    setError({
      message,
      status: status ?? null,
      context,
      timestamp: Date.now(),
    });
  }

  function clearError() {
    setError(null);
  }

  return (
    <ErrorContext.Provider value={{ error, handleError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError deve ser usado dentro de um ErrorProvider");
  }
  return context;
}
