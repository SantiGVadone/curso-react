import './App.css'
import { Movie } from './Movies'
import ResponseMovies from './mocks/with-result.json'

function App() {
  const movies = ResponseMovies.Search

  // esto de mapear los datos se hace por si el dia de mañana el 'contrato/funcionamiento' de la API que estamos consumiendo cambia
  // el mapeo de los datos este en realidad deberia de estar en otro archivo, mas 'alejado/exterior'
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }))

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movie movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
