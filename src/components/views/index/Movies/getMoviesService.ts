const apiKey = import.meta.env.PUBLIC_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

export const getMoviesService = async () => {
  const res = await fetch(url);

  return await res.json();
};
