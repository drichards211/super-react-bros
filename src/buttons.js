import React, { useState } from 'react';
import global from './global';

export default function Buttons() {
  
  const buttonMushroom = ( <button onClick={global.mario.makeSuper}> Super Mushroom </button> ); 

  const buttonStar = ( <button onClick={global.mario.makeInvincible}> Starman </button> );

  const buttonEndStar = ( <button onClick={global.mario.endInvincible}> Cancel Starman </button> );

  const buttonEnemy = ( <button onClick={global.mario.enemyLogic}> Enemy </button> );  

  const buttonFire = ( <button onClick={global.mario.makeFire}> Fire Flower </button> ); 

  const buttonCoin = ( <button onClick={global.mario.addCoin}> Coin </button> );

  const buttonOneUp = ( <button onClick={global.mario.addLife}> 1 Up </button> )

  const tryAgain = ( <button onClick={global.mario.newLifeLogic}> Try Again </button> );

  const newGame = ( <button onClick={global.mario.resetGame}> New Game </button> );

  return ( <div> {buttonMushroom} {buttonFire} {buttonStar} {buttonEndStar} {buttonEnemy} {buttonCoin} {buttonOneUp} {tryAgain} 
    {' '} {newGame} </div> );
}