import React from "react"
import { makeMove, restartGame, winnerSelector, nextTurnSelector, squareValuesSelector } from "../features/squares/squareSlice"
import { useDispatch, useSelector } from "react-redux"
import Square from "./Square"
import "./Board.css"

function Board() {
  const dispatch = useDispatch()

  const winner = useSelector(winnerSelector)
  const nextTurn = useSelector(nextTurnSelector)
  const squareValues = useSelector(squareValuesSelector)

  return (
    <>
      <div className="BoardGrid">
        {squareValues.map((value, index, array) => (
          <Square key={index} value={value} onClick={() => dispatch(makeMove(index))} />
        ))}
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
