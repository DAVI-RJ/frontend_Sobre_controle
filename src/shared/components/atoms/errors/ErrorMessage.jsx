import React from "react";
import { useError } from "@/core/context/error/ErrorProvider";

export default function ErrorMessage() {
  const { error } = useError();
  if (!error?.message) return null;

  return (
    <div
      className="error-message"
      style={{
        marginTop: "10px",
        fontSize: "18px",
        textAlign: "center",
        color: "red",
      }}
    >
      {error.message}
    </div>
  );
}
