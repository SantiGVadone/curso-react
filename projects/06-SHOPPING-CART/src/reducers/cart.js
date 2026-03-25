export const cartInitialState = []

export const cartReducer = (state, action) => {
  //recivo dos cosas el estado y el action
  const { type: actionType, payload: actionPayload } = action //el action es un objeto con 2 items adentro

  switch (
    actionType //dependiendo del actionType hago una cosa o otra
  ) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload //saco el id del payload (product)
      const productInCartIndex = state.findIndex((item) => item.id === id) //busco la pos de ese id

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state) //structuredCole hace una copia profunda
        newState[productInCartIndex].quantity += 1
        return newState
      }
      //product is not in cart
      return [
        ...state, //devuelvo el estado anterior + actionPayload (producto que me envian) + la cantidad de 1
        {
          ...actionPayload,
          quantity: 1,
        },
      ]
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload //saco el id del product
      return state.filter((item) => item.id !== id) //me quedo con los que tienen un id diferente a ese
    }

    case 'CLEAR_CART': {
      return cartInitialState //devuelvo el estado inicial que lo declare arriba '[]'
    }
  }

  return state
}