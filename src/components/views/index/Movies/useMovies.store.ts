import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Movies = {
  movieId: number | null;
  isMovieDetails: boolean;
  scrollPos: number;
  openDetails: (movieId: number) => void;
  closeDetails: () => void;
  resetScrollPos: () => void;
};

export const useMovies = create<Movies>()(
  devtools(
    (set, get) => ({
      movieId: null,
      isMovieDetails: false,
      scrollPos: 0,

      openDetails(movieId) {
        set({ isMovieDetails: true, movieId, scrollPos: window.scrollY });
      },
      closeDetails() {
        set({ isMovieDetails: false });
      },
      resetScrollPos() {
        set({ scrollPos: 0 });
      },
    }),
    { name: "movies" }
  )
);
