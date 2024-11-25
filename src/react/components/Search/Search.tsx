import { forwardRef, type InputHTMLAttributes } from "react";
import { joinClass } from "../../../utils/joinClass";
import css from "./Search.module.css";

export default forwardRef(function Search(
  { className, ...rest }: Props,
  ref: any
) {
  const finalClass = joinClass([css.search, className]);

  return (
    <label className={finalClass}>
      <input {...rest} ref={ref} type="text" placeholder="Buscar" />
    </label>
  );
});

type Props = InputHTMLAttributes<HTMLInputElement>;
