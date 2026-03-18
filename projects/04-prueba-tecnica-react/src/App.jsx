import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'
import { useCatImage } from './hooks/useCatImage' //import mi custom hook y lo puedo usar donde quiera

export function App() {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  //recupera la cita/hecho cada vez que se recarga la pagina
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1 className="titulo">App de gatitos</h1>
      <button className="button" onClick={handleClick}>
        Get new fact
      </button>
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
