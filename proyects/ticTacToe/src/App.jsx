import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

import Square from './components/Square'
import WinnerModal from './components/WinnerModal'
import useCheckWinner from './hook/useCheckWinner'
import './App.css'
import { TURNS } from './config/playerTurns'
import { saveToLocalStorage, removeLocalStorage } from './logic/storage/storage'

function App () {
  const clgStyle = 'color: yellow; font-size: 18px'

  const [tunr, SetTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    // Above line means: if turnFromStorage is true, then return turnFromStorage, else return TURNS.X
    // ?? is a nullish coalescing operator
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
    // return turnFromStorage ?? TURNS.X
    if (turnFromStorage) return turnFromStorage
    return TURNS.X
  })

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [winner, checkWinner, resetWinner] = useCheckWinner()

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    SetTurn(TURNS.X)
    resetWinner()
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = tunr
    setBoard(prevBoard => newBoard)
    const currentTurn = tunr === TURNS.X ? TURNS.O : TURNS.X
    // setTurn( prevTurn => prevTurn === TURNS.X ? TURNS.O : TURNS.X)
    SetTurn(prevTurn => currentTurn)
    /* saveToLocalStorage([
      ['board', newBoard],
      ['turn', currentTurn]
    ]) */
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', currentTurn)
    checkWinner(newBoard)
  }

  useEffect(() => {
    if (winner) {
      confetti()
    }
  }, [winner])

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, i) =>
            <Square key={i} isSelected updateBoard={updateBoard} index={i}>
              {square}
            </Square>
          )
        }
      </section>
      <section className='turn'>
        <Square isSelected={tunr === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={tunr === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}>
        <Square>{winner}</Square>
      </WinnerModal>

    </main>
  )
}

export default App
