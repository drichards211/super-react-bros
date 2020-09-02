import React, { useState } from 'react';
/* import sprites from './logo.svg'; */
import './App.css';

function RenderBrother() {
  return ( 
    <div>
      <MarioStateManager/>
    </div> 
  )
}

const MarioStateManager = () => {
  
  const [marioState, setMarioState] = useState({
    brother: "mario",
    super: false,
    fire: false,
    invincible: false,
    invinciTimer: 0,
    alive: true,
    lives: 3,
    coins: 0,
    timer: 100,
  });
  
  let marioClass = "Render-brother ";

  // BUTTONS
  let buttonMushroom = ( <button onClick={() => setMarioState((prevState) => ({
    ...prevState, super: true, }))}> Super Mushroom </button> );

  let buttonStar = ( <button onClick={() => setMarioState((prevState) => ({
    ...prevState, invincible: true, invinciTimer: 10, }))}> Starman </button> );
  
  let buttonEndStar = ( <button onClick={() => setMarioState((prevState) => ({
    ...prevState, invincible: false, }))}> Cancel Starman </button> );

  let buttonEnemy = ( <button onClick={() => {
      // ENEMY LOGIC:
      if (marioState.invincible) {
        console.log("Mario/Luigi is Invincible, no state change");
      } else if (marioState.fire) {
        setMarioState((prevState) => ({ ...prevState, fire: false, super: false, }));
      } else if (marioState.super) {
        setMarioState((prevState) => ({ ...prevState, super: false, }));
      } else if (!marioState.super) {
        setMarioState((prevState) => ({ ...prevState, alive: false, }));
      }
    }}> Enemy </button> );

  let buttonFire = ( <button onClick={() => setMarioState((prevState) => ({
    ...prevState, fire: true, super: true, }))}> Fire Flower </button> );

  let buttonCoin = ( <button onClick={() => setMarioState((prevState) => ({
    ...prevState, coins: marioState.coins +1, }))}> Coin </button> );

  let buttonOneUp = ( <button onClick={() => setMarioState((prevState) => ({
    ...prevState, lives: marioState.lives +1, }))}> One Up </button> );

  let tryAgain = ( <button onClick={() => {
    // NEW LIFE LOGIC:
    if (marioState.alive) {
      alert("Mario/Luigi is still alive. Try dying first.");
    } else if (marioState.lives > 1) { // Load new life, reset state
      setMarioState((prevState) => ({
        ...prevState, alive: true, invincible: false, super: false, timer: 100, lives: prevState.lives -1,
      }));
    } else {
      alert("GAME OVER. Please start a new game.")
    }
  }}> Try Again </button> );
    
  let newGame = ( <button onClick={() => setMarioState((prevState) => ({
    brother: "mario",
    super: false,
    fire: false,
    invincible: false,
    invinciTimer: 0,
    alive: true,
    lives: 3,
    coins: 0,
    timer: 100, }))}> New Game </button> );

  let buttons = <div> {buttonMushroom} {buttonFire} {buttonStar} {buttonEndStar} {buttonEnemy} {buttonCoin} {buttonOneUp} {tryAgain} {newGame} </div>;
  // END BUTTONS 

  // MARIO SPRITE DISPLAY LOGIC:
  switch (true) {
    case marioState.alive && marioState.invincible: // Mario-Luigi is INVINCIBLE:
      marioClass += (marioState.super) ? "invincible-super": // Invincible Super
      "invincible"; // Invincible Regular
      break;
    case marioState.alive && marioState.brother === "mario": // Mario is ALIVE:
      if (marioState.fire) { // Fire Mario
        marioClass += "fire";
      } else { 
        marioClass += (marioState.super) ? "mario-super": // Super Mario
          "mario" // Mario
      }
      break;
    case marioState.alive && marioState.brother === "luigi" : // Luigi is ALIVE:
      if (marioState.fire) { // Fire Luigi
        marioClass +=  "fire";
      } else { 
        marioClass += (marioState.super) ? "luigi-super": // Super Luigi
          "luigi" // Luigi
      }
      break;
    default: // He's DEAD, Jim!
      switch (true) {
        case marioState.fire && marioState.timer === 0: // Timer ran out while Mario/Luigi was Fire:
          marioClass += "fire-dead";
          break;
        case marioState.brother === "luigi": // Luigi is DEAD:
          marioClass += "luigi-dead";
          break;
        default: // Mario is DEAD:
          marioClass += "mario-dead";
      }
  }

  return ( <div><div className={marioClass}></div><div className="blockButtons"> {buttons} </div></div> );
}

export default RenderBrother;
