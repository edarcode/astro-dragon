import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Movies = {
  movieId: number | null;
  isMovieDetails: boolean;
  scrollPos: number;
  filters: Filters;
  openDetails: (movieId: number) => void;
  closeDetails: () => void;
  resetScrollPos: () => void;
  setFilters: (filters: Filters) => void;
};

type Filters = {
  title?: string;
};

export const useMovies = create<Movies>()(
  devtools(
    (set, get) => ({
      movieId: null,
      isMovieDetails: false,
      scrollPos: 0,
      filters: { title: "" },

      openDetails(movieId) {
        set({ isMovieDetails: true, movieId, scrollPos: window.scrollY });
      },

      closeDetails() {
        set({ isMovieDetails: false });
      },

      resetScrollPos() {
        set({ scrollPos: 0 });
      },

      setFilters(filters) {
        set({ filters });
      },
    }),
    { name: "movies" }
  )
);
