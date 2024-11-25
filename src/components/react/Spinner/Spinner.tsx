import type { HTMLAttributes } from "react";
import css from "./Spinner.module.css";
import { joinClass } from "../../../utils/joinClass";

export default function Spinner({ className, ...rest }: Props) {
  const finalClass = joinClass([css.spinner, className]);
  return <div {...rest} className={finalClass}></div>;
}

type Props = HTMLAttributes<HTMLElement>;
