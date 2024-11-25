import type { HTMLAttributes } from "react";
import Search from "../../../../react/components/Search/Search";
import { joinClass } from "../../../../utils/joinClass";
import Btn from "../../../../react/components/Btn/Btn";
import css from "./MovieFilters.module.css";
import {
  movieFiltersSchema,
  type MovieFiltersSchema,
} from "./movieFilters.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMovies } from "./useMovies.store";

export default function MovieFilters({ className, ...rest }: Props) {
  const setFilters = useMovies((movies) => movies.setFilters);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieFiltersSchema>({
    resolver: zodResolver(movieFiltersSchema),
  });

  const finalClass = joinClass([css.filters, className]);

  const obSubmit = (filters: MovieFiltersSchema) => {
    setFilters(filters);
  };

  return (
    <form {...rest} className={finalClass} onSubmit={handleSubmit(obSubmit)}>
      <Search {...register("title")} />
      <Btn disabled={!!Object.keys(errors).length}>Filtrar</Btn>
    </form>
  );
}

type Props = HTMLAttributes<HTMLFormElement>;
