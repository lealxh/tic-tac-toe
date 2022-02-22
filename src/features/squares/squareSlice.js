import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  squareValues: Array(9).fill(null),
  nextTurn: "X",
  winner: null,
  winnerCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
}

export const squareSlice = createSlice({
  initialState: initialState,
  name: "squares",
  reducers: {
    makeMove: (state, action) => {
      const index = action.payload

      if (state.squareValues[index] || state.winner) return state

      state.squareValues[index] = state.nextTurn == "X" ? "X" : "0"

      if (state.nextTurn == "X") state.nextTurn = "0"
      else state.nextTurn = "X"
      console.log(state.nextTurn)

      for (let i = 0; i < state.winnerCombinations.length; i++) {
        const [a, b, c] = state.winnerCombinations[i]
        if (state.squareValues[a] == state.squareValues[b] && state.squareValues[b] == state.squareValues[c] && state.squareValues[a] == "X") state.winner = "X"

        if (state.squareValues[a] == state.squareValues[b] && state.squareValues[b] == state.squareValues[c] && state.squareValues[a] == "0") state.winner = "0"
      }
    },
    restartGame: state => {
      state.nextTurn = state.winner ? state.winner : "X"
      state.winner = null
      state.squareValues = Array(9).fill(null)
    }
  }
})
export default squareSlice.reducer
export const { makeMove, restartGame } = squareSlice.actions

export const winnerSelector = state => state.squares.winner
export const nextTurnSelector = state => state.squares.nextTurn
export const squareValuesSelector = state => state.squares.squareValues
