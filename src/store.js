import { configureStore } from "@reduxjs/toolkit"
import { squareSlice } from "./features/squares/squareSlice"

export const store = configureStore({
  reducer: {
    squares: squareSlice
  }
})
