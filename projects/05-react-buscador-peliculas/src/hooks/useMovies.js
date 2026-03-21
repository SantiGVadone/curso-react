import { useRef, useState, useMemo, useCallback } from 'react'
import {searchMovie} from '../services/movies'

export function useMovie({search, sort}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search) //useRef es como guardar una variable, POR MAS QUE SE VUELVA A RENDERIZAR TODO

  const getMovies = useCallback( //useCallback es como el useMemo pero para las funciones
    async ({search}) => {
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
    },[]) 
  
  // const getSortedMovies = () => {
  //   console.log('getSortedMovies')//aca vemos como se esta re-renderizando esto cada ves que se altera el search
  //   const sortedMovies = sort 
  //   //localeCompare lo que hace es comparar bien las letras, no por el asci, osea que te pone las á al lado de las a, no te las manda a la mierda
  //   ? [...movies].sort ((a,b) => a.title.localeCompare(b.title))  //si tengo sort las ordeno
  //   : movies //si no tengo sort, las devuelvo asi nomas 

  //   return sortedMovies
  //}

  const sortedMovies = useMemo (()=>{ //este hook es algo asi como un 'memoriza esto, lo vas a volver a calcular SOLO CUANDO CAMBIE LO QUE TE PASO POR [...]'
    //console.log('MemoSortedMovies')
    return sort  
      ? [...movies].sort ((a,b) => a.title.localeCompare(b.title))  //si tengo sort las ordeno
      : movies //si no tengo sort, las devuelvo asi nomas 

  },[sort, movies])  //con el useMemo no re-renderiza todo TODO el tiempo, lo hace solo cuando cambian las peliculas y el sort

  return { movies: sortedMovies, getMovies, error, loading }
}
