import { useState, useEffect } from "react"
// asi se crea un customHook
// la diferencia entre un customHook y una funcion normal es que adentro de un customHook se pueden usar hooks
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  //recupera la imagen cada vez que tenemos una cita/hecho nuevo
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0] //recupero solo la primera palabra

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}