import React from 'react';
import global from './global';

export default function MarioContainer() {
  
  let marioClass = "Render-brother ";
  const mState = global.mario.marioState; // Access global store state:
  let userMessage = "";

  const MarioMessages = ({ message }) => {
    return ( <div> {message} </div>);
  }

  // MARIO SPRITE DISPLAY LOGIC:
  switch (true) {
    /* case mState.timer <= 0 && mState.fire: // TIME IS UP for Fire Mario/Luigi:
      marioClass += "fire-dead";
      break;
    case mState.timer <= 0: // TIME IS UP:
      if (mState.brother === "luigi") { // Luigi is DEAD:
        marioClass += "luigi-dead";
      } else { // Mario is DEAD:
        marioClass += "mario-dead";
      }
      break; */
    case mState.alive && mState.invincible: // Mario-Luigi is INVINCIBLE:
      marioClass += (mState.super) ? "invincible-super": "invincible"; 
      break;
    case mState.alive && mState.brother === "mario": // Mario is ALIVE:
      if (global.mario.marioState.fire) { // Fire Mario
        marioClass += "fire";
      } else { 
        marioClass += (mState.super) ? "mario-super": "mario"; // Super Mario / Mario
      }
      break;
    case mState.alive && mState.brother === "luigi": // Luigi is ALIVE:
      if (mState.fire) { // Fire Luigi
        marioClass +=  "fire";
      } else { 
        marioClass += (mState.super) ? "luigi-super": "luigi"; // Super Luigi / Luigi
      }
      break;
    default: // He's DEAD, Jim!
      switch (true) {
        case mState.timer <= 0 && mState.fire: // Timer ran out while Mario/Luigi was Fire:
          marioClass += "fire-dead";
          userMessage = (mState.lives === 0) ? "GAME OVER": "TIMES UP";
          break;
        case mState.timer <= 0: // Timer ran out:
          userMessage = (mState.lives === 0) ? "GAME OVER": "TIMES UP";
          if (mState.brother === "luigi") {
            marioClass += "luigi-dead";
          } else {
            marioClass += "mario-dead";
          }
          break;
        case mState.brother === "luigi": // Luigi is DEAD:
          marioClass += "luigi-dead";
          userMessage = (mState.lives === 0) ? "GAME OVER": "";
          break;
        default: // Mario is DEAD:
          marioClass += "mario-dead";
          userMessage = (mState.lives === 0) ? "GAME OVER": "";
      }
  }

  return ( <div className="mario-container"> <div className={marioClass}></div> <MarioMessages message={userMessage}/> </div> );
}
