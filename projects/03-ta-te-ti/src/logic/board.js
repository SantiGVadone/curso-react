import { WINNER_COMBOS } from "../constants"

export const checkWinnerFor = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if( boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    return null
  }

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every(square => square !== null)
    //uso el every, osea si cada square es diferente de null, entonces el juego terminó, porque no hay mas espacios vacios
  }