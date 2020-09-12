import React from 'react';
import global from './global';

export default function ScoreBoard() {

  const m = global.mario;
  const mState = global.mario.marioState;
  
  const playerToggle = ( <button onClick={() => { 
    //TOGGLE LOGIC:
    if (mState.brother === "mario") {
      m.selectBrother("luigi");
    } else {
      m.selectBrother("mario");
    }
  }}> {mState.brother} </button> );
  
  const pointsCounter = () => {
    return ( <div>{mState.points}</div> )
  }

  const livesCounter = () => {
    return ( <div>lives x {mState.lives}</div> );
  }

  const coinCounter = () => {
    // COIN COUNTING LOGIC:
    let numCoins = m.addLeadingZeroes(mState.coins, 2);
    if (mState.coins > 99) { 
      m.oneHundredCoins(); 
    }
    return ( <div className="coin-counter">coins x {numCoins} </div> );
  }

  const updateTime = () => {
    console.log("updateTime() ran");
    if (mState.timer < 1) {
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
    /* if (mState.timer < 1) {
      m.loseLife();
    }   */
    return ( <div> Time: {mState.timer} </div> )
  }

  const scoreBoard = <div> {playerToggle} {pointsCounter()} {livesCounter()} {coinCounter()} {timer()} </div>;

  return scoreBoard;
}

