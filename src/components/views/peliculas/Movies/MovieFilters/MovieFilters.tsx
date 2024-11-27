import css from "./MovieFilters.module.css";
import { joinClass } from "src/utils/joinClass";
import { useMovies } from "../useMovies.store";
import {
  movieFiltersSchema,
  type MovieFiltersSchema,
} from "./movieFilters.schema";
import Search from "src/react/components/Search/Search";
import Btn from "src/react/components/Btn/Btn";
import type { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "src/react/components/Select/Select";
import { GENRES } from "./genres";

export default function MovieFilters({ className, ...rest }: Props) {
  const setFilters = useMovies((movies) => movies.setFilters);
  const title = useMovies((movies) => movies.filters?.title);
  const genre = useMovies((movies) => movies.filters?.genre);

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
      <Search
        {...register("title")}
        defaultValue={title}
        placeholder="Título"
      />
      <Select opt={GENRES} {...register("genre")} defaultValue={genre} />
      <Btn disabled={!!Object.keys(errors).length}>Buscar</Btn>
    </form>
  );
}

type Props = HTMLAttributes<HTMLFormElement>;
