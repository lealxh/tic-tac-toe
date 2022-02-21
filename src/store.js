import { configureStore } from "@reduxjs/toolkit"
import squareSlice from "./components/squareSlice"

export const store = configureStore({
  reducer: {
    squares: squareSlice
  }
})
