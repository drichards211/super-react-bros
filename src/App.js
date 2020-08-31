import React, { useState } from 'react';
/* import sprites from './logo.svg'; */
import './App.css';

function RenderBrother() {
  return ( 
    <div>
      <MarioStateManager/>
      <TestButton/>
    </div> 
  )
}

const TestButton = () => {
  return (  
    <button onClick={() => console.log("mushroom")}>
      Mushroom
    </button>
  )
}

const MarioStateManager = ({ button }) => {
  console.log("MarioStateManager() ran")
  
  const [marioState, setMarioState] = useState({
    brother: "luigi",
    super: true,
    fire: false,
    invincible: false,
    invinciTimer: 0,
    alive: true,
    coins: 0,
    timer: 90,
  });
  
  // MARIO STATE LOGIC:
  switch (true) {
    case marioState.alive && marioState.invincible: // Mario-Luigi is INVINCIBLE:
      return (marioState.super) ?
      ( <div className="Render-brother invincible-super"></div> ) : // Invincible Super
      ( <div className="Render-brother invincible"></div> ) // Invincible Regular
    case marioState.alive && marioState.brother === "mario": // Mario is ALIVE:
      if (marioState.fire) { // Fire Mario
        return ( <div className="Render-brother fire"></div> )
      } else { 
        return (marioState.super) ? 
          ( <div className="Render-brother mario-super"></div> ) : // Super Mario
          ( <div className="Render-brother mario"></div> ) // Mario
      }
    case marioState.alive && marioState.brother === "luigi" : // Luigi is ALIVE:
      if (marioState.fire) { // Fire Luigi
        return ( <div className="Render-brother fire"></div> )
      } else { 
        return (marioState.super) ? 
          ( <div className="Render-brother luigi-super"></div> ) : // Super Luigi
          ( <div className="Render-brother luigi"></div> ) // Luigi
      }
    default: // He's DEAD, Jim!
      switch (true) {
        case marioState.fire && marioState.timer === 0: // Timer ran out while Mario/Luigi was Fire:
          return ( <div className="Render-brother fire-dead"></div> );
        case marioState.brother === "luigi": // Luigi is DEAD:
          return ( <div className="Render-brother luigi-dead"></div> );
        default: // Mario is DEAD:
          return ( <div className="Render-brother mario-dead"></div> );
      }
  }
}

export default RenderBrother;
