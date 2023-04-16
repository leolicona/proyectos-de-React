import { useState } from 'react'
import Square from './components/Square'
import useCheckWinner from './hook/useCheckWinner'
import './App.css'
import { TURNS } from './config/playerTurns'

function App() {
  const clgStyle = "color: yellow; font-size: 18px"


  
  const [tunr, SetTurn] = useState(TURNS.X)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [winner, checkWinner] = useCheckWinner()
  
  

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = tunr;
    setBoard(prevBoard => newBoard)
    const currentTurn = tunr === TURNS.X ? TURNS.O : TURNS.X
    SetTurn( prevTurn => currentTurn)
    checkWinner(newBoard)
  }
  
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((square, i) => 
          <Square key={i} isSelected={true} updateBoard={updateBoard} index={i}>
            {square}
          </Square>
          ) 
        }
      </section>
      <section  className='turn'>
        <Square isSelected={tunr === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={tunr === TURNS.O} >{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
