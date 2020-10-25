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
  const buttonMushroom = ( <button className="button-mushroom" onClick={() => dispatch({ type: "MAKE_SUPER" })}></button> );

  const buttonStar = ( <button className="button-starman" onClick={() => handleButtonStar()}></button> );

  const buttonEndStar = ( <button onClick={() => handleButtonEndStar()}> Cancel Starman </button> );

  const buttonEnemy = ( <button className="button-enemy walk-enemy" onClick={() => handleEnemy()}></button> );  
  
  const buttonFire = ( <button className="button-fire" onClick={() => handleFireLogic()}></button> );
  
  const buttonCoin = ( <button className="button-coin glow-coin" onClick={() => dispatch({ type: "ADD_COIN" })}></button> );

  const buttonOneUp = ( <button className="button-oneup" onClick={() => dispatch({ type: "INCREMENT_LIVES" })}></button> )

  const tryAgain = ( <button onClick={() => newLifeLogic()}> Try Again </button> );

  const newGame = ( <button onClick={() => handleNewGame()}> New Game </button> );

  return ( <div> {buttonMushroom} {buttonFire} {buttonStar} {buttonEnemy} {buttonCoin} {buttonOneUp} {tryAgain} {newGame} </div>);
}