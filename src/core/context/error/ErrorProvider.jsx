// linha para impedir que o eslint reclame sobre a regra de exportação.
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useContext } from "react";
import { ErrorContext } from "./errorContext";
import mapErrorMessage from "@/core/errors/mapErrorMessage";

export function ErrorProvider({ children }) {
  const [error, setError] = useState(null);

  function handleError(error, context = {}) {
    const status = error?.response?.status ?? null;
    const message = mapErrorMessage(status, error);

    setError({
      message,
      status: status ?? null,
      context,
      timestamp: Date.now(),
    });
  }

  function clearError() {
    setTimeout(() => {
      setError(null);
    }, 5000);
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
    throw new Error("useError context");
  }
  return context;
}
