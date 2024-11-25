import type { HTMLAttributes } from "react";
import Search from "../../../../react/components/Search/Search";
import { joinClass } from "../../../../utils/joinClass";
import Btn from "../../../../react/components/Btn/Btn";
import css from "./MovieFilters.module.css";

export default function MovieFilters({ className, ...rest }: Props) {
  const finalClass = joinClass([css.filters, className]);

  return (
    <form {...rest} className={finalClass} onSubmit={(e) => e.preventDefault()}>
      <Search />
      <Btn>Filtrar</Btn>
    </form>
  );
}

type Props = HTMLAttributes<HTMLFormElement>;
