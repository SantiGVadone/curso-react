import ResponseMovies from '../mocks/with-result.json'

export function useMovie() {
  const movies = ResponseMovies.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }))

  return { movies: mappedMovies }
}
