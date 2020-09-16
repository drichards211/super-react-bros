import React, { useEffect } from 'react';
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

  const timer = () => {
    return ( <div> Time: {mState.timer} </div> )
  }

  /* const handleTimer = () => {
    if (mState.timer === 0 ) {
      m.loseLife();
    }
  } */

  // Start timer on initial load only:
  useEffect(() => {
    global.mario.startTimer()
  }, []);

  const invinciTimer = () => ( <div> StarMan timer: {mState.starManTimer} </div> )

  const scoreBoard = <div> {playerToggle} {pointsCounter()} {livesCounter()} {coinCounter()} {timer()} {invinciTimer()} </div>;

  return scoreBoard;
}

