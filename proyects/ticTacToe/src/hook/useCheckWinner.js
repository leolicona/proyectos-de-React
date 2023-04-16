//Custom hook
import { useState, useEffect } from "react";
import { CASES } from "../config/winnerCases";


const useCheckWinner = ( ) => { 
    const clgStyle = "color: green; font-size: 18px"
    const [winner, setWinner] = useState(null)

    const endGame = (boardToCheck) => {
        const board = boardToCheck.every((square) => square !== null)
        return board
    }
   
    const checkWinner = (boardToCheck) => {
        console.log("%c checkWinner", clgStyle)
        CASES.forEach((caseWinner) => {
            const [a, b, c] = caseWinner;
            if (
                //boardToCheck[a] !== null &&
                boardToCheck[a] && 
                boardToCheck[a] === boardToCheck[b] && 
                boardToCheck[a] === boardToCheck[c]) {
                setWinner(boardToCheck[a])
            }  else if(endGame(boardToCheck)) {
                setWinner(false)
            }
        }) 

       /*  for (const combo of CASES) {
            const [a, b, c] = combo
            if (
              boardToCheck[a] &&
              boardToCheck[a] === boardToCheck[b] &&
              boardToCheck[a] === boardToCheck[c]
            ) {
                setWinner(boardToCheck[a])
            } else if( endGame(boardToCheck)) {
                setWinner(false)
            }
          } */
       
    }

    return [winner, checkWinner]
}

export default useCheckWinner