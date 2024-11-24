import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Movies = {
  movieId: number | null;
  isMovieDetails: boolean;
  openDetails: (movieId: number) => void;
  closeDetails: () => void;
};

export const useMovies = create<Movies>()(
  devtools(
    (set, get) => ({
      movieId: null,
      isMovieDetails: false,

      openDetails(movieId) {
        set({ isMovieDetails: true, movieId });
      },
      closeDetails() {
        set({ isMovieDetails: false });
      },
    }),
    { name: "movies" }
  )
);
