import React from 'react'

const WinnerModal = ({ children, winner, resetGame }) => {
  const clgStyle = 'color: yellow; font-size: 16px'
  if (winner === null) return null
  // const className = winner ? 'winner-modal is-visible' : 'winner-modal';
  const winnerText = winner ? 'Ganó' : 'Empate'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        {winner &&
          <header className='win'>
            {children}
          </header>}
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

export default WinnerModal
