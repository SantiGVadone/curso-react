import { CartContext } from './cartContext'
import { useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

// PASO 2: Crear el provider(para proveer el contexto) --->
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
