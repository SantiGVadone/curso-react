import { useState } from 'react'
import { FiltersContext } from './FiltersContext'

// PASO 2: Crear el provider(para proveer el contexto) --->
export function FiltersProviders({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
