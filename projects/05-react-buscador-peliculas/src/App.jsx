import './App.css'
import { Movie } from './Movies'
import { useMovie } from './hooks/useMovies'

function App() {
  const { movies } = useMovie()

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
        <Movie movies={movies} />
      </main>
    </div>
  )
}

export default App
