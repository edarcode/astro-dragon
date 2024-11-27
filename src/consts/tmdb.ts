const API_KEY = import.meta.env.PUBLIC_API_KEY;

export class TMDB {
  private static baseUrl = "https://api.themoviedb.org/3";

  static completeImgUrl(path: string, w = 500) {
    return `https://image.tmdb.org/t/p/w${w}/${path}`;
  }

  static getUrlMovieById(id: number) {
    return `${this.baseUrl}/movie/${id}?api_key=${API_KEY}&language=es-ES&append_to_response=videos`;
  }

  static getUrlMovies(filters: Filters) {
    if (!filters) return this.getUrlPopularMovies();

    const { page = 1, title, genre, year } = filters;

    if (!title && !genre && !year) return this.getUrlPopularMovies(page);

    if (title) return this.getUrlMoviesByTitle(title, page);

    const baseUrl = `${
      this.baseUrl
    }/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${
      !genre ? "" : genre
    }&year=${year}&sort_by=vote_average.desc`;

    return this.getUrls(baseUrl, page);
  }

  private static getUrlPopularMovies(page: number = 1) {
    const baseUrl = `${this.baseUrl}/movie/popular?api_key=${API_KEY}&language=es-ES`;

    return this.getUrls(baseUrl, page);
  }

  private static getUrlMoviesByTitle(title: string, page: number = 1) {
    const baseUrl = `${this.baseUrl}/search/movie?api_key=${API_KEY}&language=es-ES&query=${title}`;

    return this.getUrls(baseUrl, page);
  }

  private static getUrls(baseUrl: string, page: number) {
    const url = `${baseUrl}&page=${page}`;
    const prevUrl = `${baseUrl}&page=${page - 1}`;
    const nextUrl = `${baseUrl}&page=${page + 1}`;

    return {
      url,
      prevUrl,
      nextUrl,
    };
  }
}

type Filters = {
  title?: string;
  page?: number;
  genre?: string;
  year?: number;
} | null;
