import { useState } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    //DOS FUENTES DE LA VERDAD
    setMinPrice(event.target.value)

    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Precio minimo</label>
        <input
          type='range'
          id='price'
          min='0'
          max='3000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Categoria</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='smartphones'>Celulares</option>
          <option value='laptops'>Computadoras</option>
          <option value='fragrances'>Perfumes</option>
          <option value='skincare'>Cremas</option>
          <option value='groceries'>Variado</option>
          <option value='home-decoration'>Decoracion</option>
        </select>
      </div>
    </section>
  )
}
