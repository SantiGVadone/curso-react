import './Footer.css'
import { FiltersContext } from '../context/FiltersContext'
import { useContext } from 'react'

export function Footer() {
  const { filters } = useContext(FiltersContext)
  return (
    <footer className='footer'>
      {JSON.stringify(filters, null, 2)}

      {/*
      <h4>
        Prueba tecnica React - <span>@SantiGVadone</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
        */}
    </footer>
  )
}
