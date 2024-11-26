const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.PUBLIC_API_KEY;

export const TMDB = {
  popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`,
  searchMoviesByTitle: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&page=1`,
  getUrlMovieById: (id: number) =>
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES&append_to_response=videos`,
  completePath: (path: string, w = 500) =>
    `https://image.tmdb.org/t/p/w${w}/${path}`,
};
