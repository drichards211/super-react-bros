import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddLeadingZeroes from './helpers'; 

export default function ScoreBoard() {

  // Global state management via Redux Hooks:
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);
  //

  //SCOREBOARD LOGIC HANDLERS:
  const handlePlayerToggle = () => {
    if (marioState.brother === "mario") {
      dispatch({ type: "SELECT_LUIGI" });
    } else {
      dispatch({ type: "SELECT_MARIO" });
    }
  }

  const handleCoinCounter = () => {
    let numCoins = AddLeadingZeroes(marioState.coins, 2);
    if (marioState.coins > 99) { 
      dispatch({ type: "RESET_100_COINS" }); 
    }
    return numCoins;
  }
  //

  // SCOREBOARD CHILDREN:
  const PlayerToggle = ( <button onClick={(() => handlePlayerToggle())}> {marioState.brother} </button> );
  
  

  const LivesCounter = () => {
    return ( <div>lives x {marioState.lives}</div> ); // updated for Redux Hooks
  }

  const CoinCounter = () => {
    return ( <div className="coin-counter">coins x {handleCoinCounter()} </div> );
  } 

  /* const updateTime = () => {
    console.log("updateTime() ran");
    if (mState.timer < 1) {
      alert("TIME UP");
    } else {
      global.setMarioState(prevState => ({
        ...prevState, timer: global.mario.marioState.timer -1,
      }));
    }
  } */

  const Timer = () => {
    return ( <div> Time: {marioState.timer} </div> )
  }

  /* const handleTimer = () => {
    if (mState.timer === 0 ) {
      m.loseLife();
    }
  } */

  // Start timer on initial load only:
  /* useEffect(() => {
    global.time.startTimer()
  }, []); */

  const InvinciTimer = () => ( <div> StarMan timer: {marioState.starManTimer} </div> )

  /* const scoreBoard = <div> {playerToggle} {pointsCounter()} {livesCounter()} {coinCounter()} {timer()} {invinciTimer()} </div>; */

  const scoreBoard = ( <div> {PlayerToggle} <LivesCounter/> <PointsCounter points={marioState.points}/> <CoinCounter/> <Timer/> <InvinciTimer/> </div> )
  return scoreBoard;
}

//SCOREBOARD CHILDREN:
const PointsCounter = (props) => {
  return ( <div> {props.points} </div> );
}