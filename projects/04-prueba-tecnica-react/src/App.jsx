import { useState, useEffect } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
          .then((res) => res.json())
          .then((response) => {
            const { url } = response
            setImageUrl(url)
            console.log(url)
          })
      })
  }, [])

  return (
    <main>
      <h1 className="titulo">App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first trhee words for ${fact}`}
        />
      )}
    </main>
  )
}
