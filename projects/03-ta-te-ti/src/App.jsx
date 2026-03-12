import './App.css'
import { useState } from 'react'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn , setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    if (board[index] || false) return //si la posicion ya tiene algo, no hace nada
    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
  }

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <section className='game'>
        {
          board.map((_,index) => {
            return (
              <Square
              key={index} 
              index={index} 
              updateBoard={updateBoard}
              setTurn={setTurn}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
