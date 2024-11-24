import type { HTMLAttributes } from "react";

export default function Btn(props: Props) {
  const { ...rest } = props;

  return <button {...rest}></button>;
}

type Props = HTMLAttributes<HTMLButtonElement>;
