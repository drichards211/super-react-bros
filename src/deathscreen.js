import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function DeathScreen() {

  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

  let messageClass = "message-holder "; // Holds different CSS class names for the Death and Game Over messages
  let userMessage = "";

  const MarioMessages = ({ message }) => {
    return ( <div className={messageClass}> <div className="message-contents">{message}</div> </div>);
  }

  // DEATH SCREEN DISPLAY LOGIC:
  if (!marioState.inPlay) { // Display Death Screen:
    messageClass += "death-screen";
  } 
  switch (true) {
    case marioState.timer === 0: // TIMER ran out:
      userMessage = (marioState.lives === 0) ? "GAME OVER": "TIME UP";
      break;
    case !marioState.alive: // Mario-Luigi is DEAD:
      userMessage = (marioState.lives === 0) ? "GAME OVER": 
        (marioState.brother === "luigi") ? "LUIGI × "+marioState.lives: "MARIO × "+marioState.lives;
      break;
    default: // Mario-Luigi is ALIVE:
      userMessage = userMessage;
  }

  return ( <MarioMessages message={userMessage}/> )
}