import { useRef, useState } from 'react'
import {searchMovie} from '../services/movies'

export function useMovie({search}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search) //useRef es como guardar una variable, POR MAS QUE SE VUELVA A RENDERIZAR TODO

  const getMovies = async () => {
    if(search === previousSearch.current) return
    try{
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies =  await searchMovie({search})
      setMovies(newMovies)
    }catch (e) {
      setError(e.message)
    } finally{
      setLoading(false)
    }
  }
  return { movies, getMovies, error, loading }
}
