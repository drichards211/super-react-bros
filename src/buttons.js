import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // redux hooks specific
import { StartStarManTimer, StopStarManTimer, StartTimer, StopAllTimers } from './timer';

export default function Buttons() {

  // Global state management via Redux Hooks:
  const dispatch = useDispatch();
  const marioState = useSelector( (state) => state);

  // Button logic handlers:
  const handleEnemy = () => {
    switch (true) {
      case marioState.invincible: // Mario/Luigi is Invincible, no state change
        break; 
      case marioState.fire:
        dispatch( {type: "LOSE_FIRE"} );
        break;
      case marioState.super:
        dispatch( {type: "MAKE_SMALL"} );
        break;
      default:
        StopAllTimers();
        dispatch({ type: "LOSE_LIFE"} );
    }
  };

  const handleNewGame = () => {
    dispatch({ type: "RESET_GAME" });
    StopAllTimers();
    StartTimer();
  };

  const newLifeLogic = () => {
    if (marioState.alive) {
      alert("Mario/Luigi is still alive. Try dying first.");
    } else if (marioState.lives > 0) { // Load new life, reset state
      dispatch({ type: "START_NEW_LIFE" });
      StartTimer();
    } else {
      alert("GAME OVER. Please start a new game.")
    }
  };

  const handleFireLogic = () => {
    switch (marioState.super) {
      case true:
        dispatch({ type: "MAKE_FIRE" });
        break;
      default:
        dispatch({ type: "MAKE_SUPER" });
    }
  };

  const handleButtonStar = () => {
    dispatch({ type: "MAKE_INVINCIBLE" });
    StopStarManTimer(); // End any ongoing timer before starting another countdown
    StartStarManTimer();
  }

  const handleButtonEndStar = () => {
    dispatch({ type: "END_INVINCIBLE" });
    StopStarManTimer();
  }

  // BUTTONS:
  const buttonMushroom = ( <button onClick={() => dispatch({ type: "MAKE_SUPER" })}> Super Mushroom </button> );

  const buttonStar = ( <button onClick={() => handleButtonStar()}> Starman </button> );

  const buttonEndStar = ( <button onClick={() => handleButtonEndStar()}> Cancel Starman </button> );

  const buttonEnemy = ( <button onClick={() => handleEnemy()}> Enemy </button> );  
  
  const buttonFire = ( <button onClick={() => handleFireLogic()}> Fire Flower </button> );
  
  const buttonCoin = ( <button onClick={() => dispatch({ type: "ADD_COIN" })}> Coin </button> );

  const buttonOneUp = ( <button onClick={() => dispatch({ type: "INCREMENT_LIVES" })}> 1 Up </button> )

  const tryAgain = ( <button onClick={() => newLifeLogic()}> Try Again </button> );

  const newGame = ( <button onClick={() => handleNewGame()}> New Game </button> );

  return ( <div> {buttonMushroom} {buttonFire} {buttonStar} {buttonOneUp} {buttonEnemy} {buttonCoin} {tryAgain} {newGame} </div>);
}