import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StartTimer } from './timer';
import AddLeadingZeroes from './helpers'; 

export default function ScoreBoard() {

  // Global state management via Redux Hooks:
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

  // Start timer on initial load only:
  useEffect(() => {
    StartTimer();
  }, []);

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

  // SCOREBOARD CHILDREN:
  const PlayerToggle = ( <button onClick={(() => handlePlayerToggle())}> {marioState.brother} </button> );
  
  const PointsCounter = (props) => {
    return ( <div> {props.points} </div> );
  }
  
  const LivesCounter = () => {
    return ( <div>lives x {marioState.lives}</div> );
  }

  const CoinCounter = () => {
    return ( <div className="coin-counter">coins x {handleCoinCounter()} </div> );
  } 

  const Timer = () => {
    return ( <div> Time: {marioState.timer} </div> )
  }

  const InvinciTimer = () => ( <div> StarMan timer: {marioState.starManTimer} </div> )

  return ( <div> {PlayerToggle} <LivesCounter/> <PointsCounter points={marioState.points}/> <CoinCounter/> <Timer/> <InvinciTimer/> </div> );
}
