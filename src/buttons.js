import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // redux hooks specific 

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
        dispatch({ type: "DECREMENT_LIVES"} );
        dispatch({ type: "LOSE_LIFE"} );
    }
  };

  const newLifeLogic = () => {
    if (marioState.alive) {
      alert("Mario/Luigi is still alive. Try dying first.");
    } else if (marioState.lives > 0) { // Load new life, reset state
      dispatch({ type: "START_NEW_LIFE" });
      /* startTimer(); */ // dispatch is synchronous... this should work.
    } else {
      alert("GAME OVER. Please start a new game.")
    }
  };



  const buttonMushroom = ( <button onClick={() => dispatch({ type: "MAKE_SUPER" })}> Super Mushroom </button> );

  /* const buttonStar = ( <button onClick={global.mario.makeInvincible}> Starman </button> ); */

  /* const buttonEndStar = ( <button onClick={global.mario.endInvincible}> Cancel Starman </button> ); */

  const buttonEnemy = ( <button onClick={() => handleEnemy()}> Enemy </button> );  
  
  const buttonFire = ( <button onClick={() => dispatch({ type: "MAKE_FIRE" })}> Fire Flower </button> );
  // add handleFireLogic() ... if marioState.super: mario becomes Fire, else: becomes Super only

  const buttonCoin = ( <button onClick={() => dispatch({ type: "ADD_COIN" })}> Coin </button> );

  const buttonOneUp = ( <button onClick={() => dispatch({ type: "INCREMENT_LIVES" })}> 1 Up </button> )

  const tryAgain = ( <button onClick={() => newLifeLogic()}> Try Again </button> );

  const newGame = ( <button onClick={() => dispatch({ type: "RESET_GAME" })}> New Game </button> );

  /* return ( <div> {buttonMushroom} {buttonFire} {buttonStar} {buttonEndStar} {buttonEnemy} {buttonCoin} {buttonOneUp} {tryAgain} 
    {' '} {newGame} </div> ); */
    return ( <div> {buttonMushroom} {buttonFire} {buttonOneUp} {buttonEnemy} {buttonCoin} {tryAgain} {newGame} </div>);
}