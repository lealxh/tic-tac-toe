import React, { useEffect } from "react"
/**
 * A UI component representing a square button.
 * @param {number} value - The value to be displayed on the button.
 * @param {Function} onClick - The callback function to be executed when the button is clicked.
 * @returns {JSX.Element} The JSX element representing the square button.
 */

function Square({ value, onClick }) {
  return (
    <>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </>
  )
}

export default Square
