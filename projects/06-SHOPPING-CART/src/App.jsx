import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [products] = useState(initialProducts) //obtengo los productos del mocks por ahora pero despues los saco de un fetch a la API
  const [filters, setFilters] = useState({
    category: 'all', //estos van a ser los filtros BASE, todas las categorias y precio minimo 0(todos los productos)
    minPrice: 0,
  })

  const filterProducts = (products) => {
    //creo una funcion que me devuelva los productos filtrados
    return products.filter((product) => {
      //hago el filtro
      return (
        product.price >= filters.minPrice && //si el precio es MAYOR o IGUAL al precio minimo Y si
        (filters.category === 'all' || product.category === filters.category) //la categoria es ALL o es la misma que el producto
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
