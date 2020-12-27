import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StartTimer } from './timer';
import { AddLeadingZeroes } from './helpers'; 

export default function ScoreBoard() {

  // Global state management via Redux Hooks:
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

  // Start timer on initial load only:
  useEffect(() => {
    StartTimer();
  }, []);

  //SCOREBOARD LOGIC HANDLERS:
  const handleCoinCounter = () => {
    let numCoins = AddLeadingZeroes(marioState.coins, 2);
    if (marioState.coins > 99) { 
      dispatch({ type: "RESET_100_COINS" }); 
    }
    return numCoins;
  }

  // SCOREBOARD CHILDREN:
  const PlayerNumLives = ( <div> {marioState.brother.toUpperCase()} x {marioState.lives} </div> );
    
  const PointsCounter = (props) => {
    return ( <div> {props.points} </div> );
  }
  
  const LivesCounter = () => {
    return ( <div>lives x {marioState.lives}</div> );
  }

  const CoinCounter = () => {
    return ( <div 
      className="coin-counter">
      <div className="mini-coin-sprite"></div>
      {' '} x {handleCoinCounter()} 
    </div> );
  } 

  const Timer = () => {
    return ( <div> TIME <br /> 
      {marioState.timer} 
    </div> )
  }

  const InvinciTimer = () => ( <div> StarMan timer: {marioState.starManTimer} </div> )

  return ( <div> 
    <div className="scoreboard row"> 
      <div className="col-33"> 
        {PlayerNumLives} 
        <PointsCounter points={marioState.points}/>
      </div> 
      <div className="col-33">
        <br /> 
        <CoinCounter/> 
      </div>
      <div className="col-33"> 
        <Timer/>
      </div>
    </div>
  </div> );
}
