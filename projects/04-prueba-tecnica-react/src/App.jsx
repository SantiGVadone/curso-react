import { useState, useEffect } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

  //recupera la cita/hecho cada vez que se recarga la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => {
        if (!res.ok) {
          setFactError('No se ha podido recuperar la cita')
          throw new Error('Error fetching fact')
        }
        return res.json()
      })
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
      .catch((error) => {
        setFact(factError)
      })
  }, [])
  //recupera la imagen cada vez que tenemos una cita/hecho nuevo
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1 className="titulo">App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          title={fact.split(' ')[0]}
          src={imageUrl}
          alt={`Image extracted using the first word of: ${fact}`}
        />
      )}
    </main>
  )
}
