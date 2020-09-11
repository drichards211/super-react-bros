import React, { useState } from 'react';
import global from './global';

export default function MarioContainer() {
  
  let marioClass = "Render-brother ";
  let mState = global.mario.marioState; // Access global store state:

  // MARIO SPRITE DISPLAY LOGIC:
  switch (true) {
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
        case mState.fire && mState.timer === 0: // Timer ran out while Mario/Luigi was Fire:
          marioClass += "fire-dead";
          break;
        case mState.brother === "luigi": // Luigi is DEAD:
          marioClass += "luigi-dead";
          break;
        default: // Mario is DEAD:
          marioClass += "mario-dead";
      }
  }

  return ( <div className={marioClass}></div> );
}
