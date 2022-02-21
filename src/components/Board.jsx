import React, { useEffect, useState } from "react"
import { makeMove, restartGame, selectNextTurn, selectWinner, selectSquareValues } from "./squareSlice"
import { useDispatch, useSelector } from "react-redux"
import Square from "./Square"
import "./Board.css"
import {} from "react-redux"

function Board() {
  const dispatch = useDispatch()
  const winner = useSelector(selectWinner)
  const nextTurn = useSelector(selectNextTurn)
  const squareValues = useSelector(selectSquareValues)

  return (
    <>
      <div className="BoardGrid">
        <div>
          {" "}
          Square Values
          {squareValues}
        </div>

        <div>
          Next Turn:
          {nextTurn}
        </div>
        <div>
          Winner:
          {winner}
        </div>
      </div>
      <div className="winnerDiv">{winner ? `Winner is ${winner}` : `Next turn: ${nextTurn}`} </div>
      <div className="restartButon">
        <button className="square" onClick={() => dispatch(restartGame())}>
          Restart
        </button>
      </div>
    </>
  )
}

export default Board
