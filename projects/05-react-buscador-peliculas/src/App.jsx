import './App.css'
import { Movie } from './Movies'
import { useMovie } from './hooks/useMovies'
import { useRef } from 'react'

function App() {
  const { movies } = useMovie()
  const inputRef = useRef() //<-- no hay que abusar de esto
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

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    console.log(query)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query'
            ref={inputRef}
            placeholder='Avengers, Star Wars, The Matrix ...'
          />
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
