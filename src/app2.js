import React, { useState } from 'react';
import '.App.css';
import global from './global';

// ADMINISTRATIVE TOOLS:
function addLeadingZeroes(number, places) {
// Stringifies number and adds leading zeroes:
  return String(number).padStart(places, '0');
}

function MarioStateManager() {
  
  let marioClass = "Render-brother ";

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

  return ( <div className={marioClass}></div> );
}

function ScoreBoard() {
  let playerToggle = ( <button onClick={() => { 
    //TOGGLE LOGIC:
    if (marioState.brother === "mario") {
      setMarioState(prevState => ({
        ...prevState, brother: "luigi",
      }));
    } else {
      setMarioState(prevState => ({
        ...prevState, brother: "mario",
      }));
    }
  }}> {marioState.brother} </button> );
  
  const pointsCounter = () => {
    return ( <div>{marioState.points}</div> )
  }

  const livesCounter = () => {
    return ( <div>lives x {marioState.lives}</div> );
  }

  const coinCounter = () => {
    // COIN COUNTING LOGIC:
    let numCoins = addLeadingZeroes(marioState.coins, 2);
    if (marioState.coins > 99) {
      setMarioState(prevState => ({
        ...prevState, coins: 0, lives: marioState.lives +1 }))
    }
    return ( <div className="coin-counter">coins x {numCoins} </div> );
  }

  const updateTime = () => {
    console.log("updateTime() ran");
    if (marioState.timer < 1) {
      alert("TIME UP");
    } else {
      setMarioState(prevState => ({
        ...prevState, timer: marioState.timer -1,
      }));
    }
  }

  // YOU CANNOT USE setInterval inside the main body of a React function component:
  // TODO: Re-factor to use a custom hook, and move the timer outside: 
  // see: https://medium.com/@sdolidze/the-iceberg-of-react-hooks-af0b588f43fb

  /* setInterval(updateTime, 1000); */
  
  const timer = () => {
    // TIMER LOGIC:
    if (marioState.timer < 1) {
      setMarioState(prevState => ({
        ...prevState, lives: marioState.lives -1,
      }));
    } 
    return ( <div> Time: {marioState.timer} </div> )
  }

  const scoreBoard = <div> {playerToggle} {pointsCounter()} {livesCounter()} {coinCounter()} </div>;

  return scoreBoard;

}

function Buttons() {
  let [marioState, setMarioState] = useMarioState();

  const buttonMushroom = ( <button onClick={() => setMarioState(prevState => ({
    ...prevState, super: true, }))}> Super Mushroom </button> );
    
  const buttonStar = ( <button onClick={() => setMarioState(prevState => ({
    ...prevState, invincible: true, invinciTimer: 10, }))}> Starman </button> );
  
  const buttonEndStar = ( <button onClick={() => setMarioState(prevState => ({
    ...prevState, invincible: false, }))}> Cancel Starman </button> );

  const buttonEnemy = ( <button onClick={() => {
      // ENEMY LOGIC:
      if (marioState.invincible) {
        console.log("Mario/Luigi is Invincible, no state change");
      } else if (marioState.fire) {
        setMarioState(prevState => ({ ...prevState, fire: false, super: false, }));
      } else if (marioState.super) {
        setMarioState(prevState => ({ ...prevState, super: false, }));
      } else if (!marioState.super) {
        setMarioState(prevState => ({ ...prevState, alive: false, }));
      }
    }}> Enemy </button> );

  const buttonFire = ( <button onClick={() => setMarioState(prevState => ({
    ...prevState, fire: true, super: true, }))}> Fire Flower </button> );

  const buttonCoin = ( <button onClick={() => setMarioState(prevState => ({
    ...prevState, coins: marioState.coins +1, 
    // Convert marioState.points into a number, add 200 points, convert back into string with leading zeroes:
    points: addLeadingZeroes((parseInt(marioState.points) +200), 6) }))}  > Coin </button> );
    
  const buttonOneUp = ( <button onClick={() => setMarioState(prevState => ({
    ...prevState, lives: marioState.lives +1, }))}> One Up </button> );

  const tryAgain = ( <button onClick={() => {
    // NEW LIFE LOGIC:
    if (marioState.alive) {
      alert("Mario/Luigi is still alive. Try dying first.");
    } else if (marioState.lives > 1) { // Load new life, reset state
      setMarioState(prevState => ({
        ...prevState, alive: true, invincible: false, super: false, timer: 100, lives: prevState.lives -1,
      }));
    } else {
      alert("GAME OVER. Please start a new game.")
    }
  }}> Try Again </button> );
    
  const newGame = ( <button onClick={() => setMarioState(prevState => ({
    brother: marioState.brother,
    super: false,
    fire: false,
    invincible: false,
    invinciTimer: 0,
    alive: true,
    points: "000000",
    lives: 3,
    coins: 0,
    timer: 100, }))}> New Game </button> );

  const buttons = <div> {buttonMushroom} {buttonFire} {buttonStar} {buttonEndStar} {buttonEnemy} {buttonCoin} {buttonOneUp} {tryAgain} {newGame} </div>;

  return buttons;
}

export default App;