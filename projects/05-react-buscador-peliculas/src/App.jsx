import { useEffect, useState, useRef } from 'react' //estos son los hooks que uso de react
import './App.css' //estos son mis estilos
import { Movie } from './Movies' //este es mi componente
import { useMovie } from './hooks/useMovies' //este es mi customHooks
//import { useRef } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con numeros')
      return
    }

    if (search.length <= 2) {
      setError('La busqueda debe tener al menos 2 caracteres')
      return
    }
    setError(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  /*
  const inputRef = useRef() //<-- no hay que abusar de esto
  
  una forma de recuperar el dato del input sin necesidad del useRef puede ser esta:
  const handleSubmit = (event) => {
      event.preventDefault()
      const query = inputRef.current.value
      console.log(query)
    }

    PARA NO HACER 15 useRef PARA PODER LEER TODOS LOS INPUTS O CAMPOS TAMBIEN SE PUEDE HACER ASI:
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
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovie({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query'
            onChange={handleChange}
            value={search}
            placeholder='Avengers, Star Wars, The Matrix ...'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando ...</p> : <Movie movies={movies} />}</main>
    </div>
  )
}

export default App
