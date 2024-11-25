import type { ButtonHTMLAttributes } from "react";
import css from "./Btn.module.css";
import { joinClass } from "../../../utils/joinClass";

export default function Btn(props: Props) {
  const { className, ...rest } = props;
  const finalClass = joinClass([css.btn, className]);
  return <button {...rest} className={finalClass}></button>;
}

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
