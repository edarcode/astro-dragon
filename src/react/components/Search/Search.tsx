import type { InputHTMLAttributes } from "react";
import { joinClass } from "../../../utils/joinClass";
import css from "./Search.module.css";

export default function Search({ className, ...rest }: Props) {
  const finalClass = joinClass([css.search, className]);

  return (
    <label className={finalClass}>
      <input {...rest} type="text" placeholder="Buscar" />
    </label>
  );
}

type Props = InputHTMLAttributes<HTMLInputElement>;
