import './style.css'
import React from 'react'
import addConfetti from './addConfetti'

/*

💪 Exercise: Event handling

🎯 Your task:
  - Currently the confetti button is broken and does nothing.
  - Notice the addConfetti function imported at the top of this file. Make it so that this function is called when the confetti button is clicked. 
  - To achieve this, you'll need to add an onClick handler to the <button> element.

*/

export default function App() {
  return (
    <main>
      <h1>The Confetti Button</h1>
      <button>Confetti!</button>
    </main>
  )
}
