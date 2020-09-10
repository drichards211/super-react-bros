import React, { useState } from 'react';
/* import '.App.css'; */
import global from './global';

export default function MarioContainer() {
  
  let marioClass = "Render-brother ";

  // MARIO SPRITE DISPLAY LOGIC:
  switch (true) {
    case global.mario.marioState.alive && global.mario.marioState.invincible: // Mario-Luigi is INVINCIBLE:
      marioClass += (global.mario.marioState.super) ? "invincible-super": // Invincible Super
      "invincible"; // Invincible Regular
      break;
    case global.mario.marioState.alive && global.mario.marioState.brother === "mario": // Mario is ALIVE:
      if (global.mario.marioState.fire) { // Fire Mario
        marioClass += "fire";
      } else { 
        marioClass += (global.mario.marioState.super) ? "mario-super": // Super Mario
          "mario" // Mario
      }
      break;
    case global.mario.marioState.alive && global.mario.marioState.brother === "luigi" : // Luigi is ALIVE:
      if (global.mario.marioState.fire) { // Fire Luigi
        marioClass +=  "fire";
      } else { 
        marioClass += (global.mario.marioState.super) ? "luigi-super": // Super Luigi
          "luigi" // Luigi
      }
      break;
    default: // He's DEAD, Jim!
      switch (true) {
        case global.mario.marioState.fire && global.mario.marioState.timer === 0: // Timer ran out while Mario/Luigi was Fire:
          marioClass += "fire-dead";
          break;
        case global.mario.marioState.brother === "luigi": // Luigi is DEAD:
          marioClass += "luigi-dead";
          break;
        default: // Mario is DEAD:
          marioClass += "mario-dead";
      }
  }

  return ( <div className={marioClass}></div> );
}
