import React from "react";
import { useError } from "@/core/context/error/ErrorProvider";

import style from "./error.module.css";

export default function ErrorMessage() {
  const { error } = useError();
  if (!error?.message) return null;

  return <div className={style.message}>{error.message}</div>;
}
