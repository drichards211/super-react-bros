import React, { useState } from 'react';
/* import '.App.css'; */
import global from './global';

export default function ScoreBoard() {
  let playerToggle = ( <button onClick={() => { 
    //TOGGLE LOGIC:
    if (global.mario.marioState.brother === "mario") {
      global.mario.setMarioState(prevState => ({
        ...prevState, brother: "luigi",
      }));
    } else {
      global.mario.setMarioState(prevState => ({
        ...prevState, brother: "mario",
      }));
    }
  }}> {global.mario.marioState.brother} </button> );
  
  const pointsCounter = () => {
    return ( <div>{global.mario.marioState.points}</div> )
  }

  const livesCounter = () => {
    return ( <div>lives x {global.mario.marioState.lives}</div> );
  }

  const coinCounter = () => {
    // COIN COUNTING LOGIC:
    let numCoins = addLeadingZeroes(global.mario.marioState.coins, 2);
    if (global.mario.marioState.coins > 99) {
      global.mario.setMarioState(prevState => ({
        ...prevState, coins: 0, lives: global.mario.marioState.lives +1 }))
    }
    return ( <div className="coin-counter">coins x {numCoins} </div> );
  }

  const updateTime = () => {
    console.log("updateTime() ran");
    if (global.mario.marioState.timer < 1) {
      alert("TIME UP");
    } else {
      global.setMarioState(prevState => ({
        ...prevState, timer: global.mario.marioState.timer -1,
      }));
    }
  }

  // YOU CANNOT USE setInterval inside the main body of a React function component:
  // TODO: Re-factor to use a custom hook, and move the timer outside: 
  // see: https://medium.com/@sdolidze/the-iceberg-of-react-hooks-af0b588f43fb

  /* setInterval(updateTime, 1000); */
  
  const timer = () => {
    // TIMER LOGIC:
    if (global.mario.marioState.timer < 1) {
      global.mario.setMarioState(prevState => ({
        ...prevState, lives: global.mario.marioState.lives -1,
      }));
    } 
    return ( <div> Time: {global.mario.marioState.timer} </div> )
  }

  const scoreBoard = <div> {playerToggle} {pointsCounter()} {livesCounter()} {coinCounter()} </div>;

  return scoreBoard;
}

// ADMINISTRATIVE TOOLS:
function addLeadingZeroes(number, places) {
  // Stringifies number and adds leading zeroes:
    return String(number).padStart(places, '0');
  }