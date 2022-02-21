import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./store"
import Board from "./components/Board"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Board />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
