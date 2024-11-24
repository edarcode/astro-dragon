import { createBrowserRouter, Outlet } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import MovieCards from "./MovieCards";

export const MOVIE_CARDS = {
  id: crypto.randomUUID(),
  path: "",
  to: "/",
  display: "Péliculas",
  element: <MovieCards />,
};

export const MOVIE_DETAIL = {
  id: crypto.randomUUID(),
  path: "movie-detail",
  to: "/movie-detail",
  display: "Detalles de pélicula",
  element: <MovieDetail />,
};

export const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children: [MOVIE_CARDS, MOVIE_DETAIL],
  },
]);
