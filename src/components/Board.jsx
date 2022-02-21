import React, { useEffect, useState } from "react"
import Square from "./Square"
import "./Board.css"
function Board() {
  const [values, setValues] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const [winner, setWinner] = useState(null)

  function calculateWinner(values) {
    const wp = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < wp.length; i++) {
      const [a, b, c] = wp[i]
      if (values[a] == values[b] && values[b] == values[c] && values[a] == "X") setWinner("X")

      if (values[a] == values[b] && values[b] == values[c] && values[a] == "0") setWinner("0")
    }
  }
  function handleClick(index) {
    if (values[index] || winner) return

    values[index] = isXTurn ? "X" : "0"
    setValues(values)
    setIsXTurn(!isXTurn)

    calculateWinner(values)
  }

  function handleRestart() {
    setIsXTurn(winner ? winner == "X" : true)
    setWinner(null)
    setValues(Array(9).fill(null))
  }
  return (
    <>
      <div className="BoardGrid">
        {values.map((value, index, array) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="winnerDiv">{winner ? "Winner is " + winner : isXTurn ? "Next turn: X" : "Next turn: 0"}</div>
      <div className="restartButon">
        <button className="square" onClick={() => handleRestart()}>
          Restart
        </button>
      </div>
    </>
  )
}

export default Board
