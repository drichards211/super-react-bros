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
  if (!marioState.alive) { // Mario-Luigi is DEAD:
    if (marioState.timer === 0) { // Timer ran out:
      userMessage = (marioState.lives === 0) ? "GAME OVER": "TIME UP";
    } else { // Mario-Luigi DEAD from enemy:
      userMessage = (marioState.lives === 0) ? "GAME OVER": 
        (marioState.brother === "luigi") ? "LUIGI × "+marioState.lives: "MARIO × "+marioState.lives;
    }
  }
    
  return ( <MarioMessages message={userMessage}/> )
}