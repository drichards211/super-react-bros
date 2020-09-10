import React, { useState } from 'react';
/* import '.App.css'; */
import global from './global';

export default function Buttons() {
  /* let [marioState, setMarioState] = useMarioState(); */

  const buttonMushroom = ( <button onClick={() => global.mario.setMarioState(prevState => ({
    ...prevState, super: true, }))}> Super Mushroom </button> );
    
  const buttonStar = ( <button onClick={() => global.mario.setMarioState(prevState => ({
    ...prevState, invincible: true, invinciTimer: 10, }))}> Starman </button> );
  
  const buttonEndStar = ( <button onClick={() => global.mario.setMarioState(prevState => ({
    ...prevState, invincible: false, }))}> Cancel Starman </button> );

  const buttonEnemy = ( <button onClick={() => {
      // ENEMY LOGIC:
      if (global.mario.marioState.invincible) {
        console.log("Mario/Luigi is Invincible, no state change");
      } else if (global.mario.marioState.fire) {
        global.mario.setMarioState(prevState => ({ ...prevState, fire: false, super: false, }));
      } else if (global.mario.marioState.super) {
        global.mario.setMarioState(prevState => ({ ...prevState, super: false, }));
      } else if (!global.mario.marioState.super) {
        global.mario.setMarioState(prevState => ({ ...prevState, alive: false, }));
      }
    }}> Enemy </button> );

  const buttonFire = ( <button onClick={() => global.mario.setMarioState(prevState => ({
    ...prevState, fire: true, super: true, }))}> Fire Flower </button> );

  const buttonCoin = ( <button onClick={() => global.mario.setMarioState(prevState => ({
    ...prevState, coins: global.mario.marioState.coins +1, 
    // Convert marioState.points into a number, add 200 points, convert back into string with leading zeroes:
    points: addLeadingZeroes((parseInt(global.mario.marioState.points) +200), 6) }))}  > Coin </button> );
    
  const buttonOneUp = ( <button onClick={() => global.mario.setMarioState(prevState => ({
    ...prevState, lives: global.mario.marioState.lives +1, }))}> 1 Up </button> );

  const tryAgain = ( <button onClick={() => {
    // NEW LIFE LOGIC:
    if (global.mario.marioState.alive) {
      alert("Mario/Luigi is still alive. Try dying first.");
    } else if (global.mario.marioState.lives > 1) { // Load new life, reset state
      global.mario.setMarioState(prevState => ({
        ...prevState, alive: true, invincible: false, super: false, timer: 100, lives: prevState.lives -1,
      }));
    } else {
      alert("GAME OVER. Please start a new game.")
    }
  }}> Try Again </button> );
    
  const newGame = ( <button onClick={() => global.mario.setMarioState(prevState => ({
    brother: global.mario.marioState.brother,
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

// ADMINISTRATIVE TOOLS:
function addLeadingZeroes(number, places) {
  // Stringifies number and adds leading zeroes:
    return String(number).padStart(places, '0');
  }