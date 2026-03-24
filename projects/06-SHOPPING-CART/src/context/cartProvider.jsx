import { CartContext } from './cartContext'
import { useState } from 'react'

// PASO 2: Crear el provider(para proveer el contexto) --->
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    //check if product is alredy in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart) //structuredCole hace una copia profunda
      newCart[productInCartIndex].quantity += 1 //lo busco por el indice que ya tengo y incremento en 1 la cantidad
      return setCart(newCart)
    }

    //product is not in cart
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ])
  }

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
