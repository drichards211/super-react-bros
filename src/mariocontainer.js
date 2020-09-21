import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/* import global from './global'; */

export default function MarioContainer() {
  
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);
  
  let marioClass = "Render-brother ";
  let userMessage = "";

  const MarioMessages = ({ message }) => {
    return ( <div> {message} </div>);
  }

  // MARIO SPRITE DISPLAY LOGIC:
  switch (true) {
    case marioState.alive && marioState.invincible: // Mario-Luigi is INVINCIBLE:
      marioClass += (marioState.super) ? "invincible-super": "invincible"; 
      break;
    case marioState.alive && marioState.brother === "mario": // Mario is ALIVE:
      if (marioState.fire) { // Fire Mario
        marioClass += "fire";
      } else { 
        marioClass += (marioState.super) ? "mario-super": "mario"; // Super Mario / Mario
      }
      break;
    case marioState.alive && marioState.brother === "luigi": // Luigi is ALIVE:
      if (marioState.fire) { // Fire Luigi
        marioClass +=  "fire";
      } else { 
        marioClass += (marioState.super) ? "luigi-super": "luigi"; // Super Luigi / Luigi
      }
      break;
    default: // MARIO-LUIGI are DEAD:
      switch (true) {
        case marioClass.timer <= 0 && marioState.fire: // Timer ran out while Mario-Luigi was Fire:
          marioClass += "fire-dead";
          userMessage = (marioState.lives === 0) ? "GAME OVER": "TIMES UP";
          break;
        case marioClass.timer <= 0: // Timer ran out:
          userMessage = (marioState.lives === 0) ? "GAME OVER": "TIMES UP";
          if (marioState.brother === "luigi") {
            marioClass += "luigi-dead";
          } else {
            marioClass += "mario-dead";
          }
          break;
        case marioState.brother === "luigi": // Luigi is DEAD:
          marioClass += "luigi-dead";
          userMessage = (marioState.lives === 0) ? "GAME OVER": "";
          break;
        default: // Mario is DEAD:
          marioClass += "mario-dead";
          userMessage = (marioState.lives === 0) ? "GAME OVER": "";
      }
  }

  return ( <div className="mario-container"> <div className={marioClass}></div> <MarioMessages message={userMessage}/> </div> );
}
