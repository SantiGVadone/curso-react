import { useEffect, useState } from 'react'
import './App.css'
import { Movie } from './Movies'
import { useMovie } from './hooks/useMovies'
//import { useRef } from 'react'

function App() {
  const { movies } = useMovie()
  //const inputRef = useRef() //<-- no hay que abusar de esto
  /*
  una forma de recuperar el dato del input sin necesidad del useRef puede ser esta:
  const handleSubmit = (event) => {
      event.preventDefault()
      const query = inputRef.current.value
      console.log(query)
    }
  */

  /*  PARA NO HACER 15 useRef PARA PODER LEER TODOS LOS INPUTS O CAMPOS TAMBIEN SE PUEDE HACER ASI:
    const handleSubmit = (event) => {
      event.preventDefault()
      const fields = Object.fromEntries(new window.FormData(event.target))
      console.log(fields)
    }

    DE ESTA FORMA OBTENDRIAMOS UN OBJECT CON TODOS LOS CAMPOS ALGO ASI COMO:
    {
    "name_input_1": 'Contendio del input 1',
    "name_input_2": 'Contendio del input 2',
    "name_input_3": 'Contendio del input 3',
    "name_input_4": 'Contendio del input 4',
    "name_input_5": 'Contendio del input 5'
    }
  */
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)

    if (newQuery === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (newQuery.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con numeros')
      return
    }

    if (newQuery.length <= 2) {
      setError('La busqueda debe tener al menos 2 caracteres')
      return
    }
    setError(null)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query'
            onChange={handleChange}
            value={query}
            placeholder='Avengers, Star Wars, The Matrix ...'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movie movies={movies} />
      </main>
    </div>
  )
}

export default App
