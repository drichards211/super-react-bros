import { useState, useEffect, useRef } from 'react';
import global from './global';
import useTimers from './timer';

const initialMarioState = {
  brother: "mario",
  super: false,
  fire: false,
  invincible: false,
  starManTimer: 0,
  alive: true,
  points: "000000",
  lives: 3,
  coins: 0,
  timer: 100,
}

export default function useMarioState() { // This is a custom, GLOBAL hook.
  let [marioState, setMarioState] = useState(initialMarioState);
  
  // TIMER SPECIFIC FUNCTIONS:
  let timerCountDown = useRef(marioState.timer); // useRef allows clearInterval to access the variable, (a fun React gotcha).
  let starManCountDown = useRef(marioState.starManTimer); 
  
  useEffect(() => { // Keep timerCountDown current, (another fun React gotcha).
    timerCountDown.current = marioState.timer 
  }, [marioState.timer]);
  useEffect(() => { 
    starManCountDown.current = marioState.starManTimer 
  }, [marioState.starManTimer]);
  
  const startTimer = () => {
    timerCountDown.current = setInterval(function() {
      handleTimer();
      setMarioState(prevState => ({
      ...prevState, timer: prevState.timer -1, }));
    }, 1000);
  }

  const handleTimer = () => {
    if (timerCountDown.current === 1) { // startTimer calls this exactly 1 second late, thus === 1 instead of 0.
      console.log("TIMES UP")
      loseLife();
    }
  }
  
  const stopTimer = () => { 
    console.log("stopTimer() ran");
    console.log(timerCountDown.current);
    clearInterval(timerCountDown.current); 
  }

  const startStarManTimer = () => {
    starManCountDown.current = setInterval(function() {
      setMarioState(prevState => ({
        ...prevState, starManTimer: prevState.timer -1, }));
    }, 1000);
  }

  const stopStarManTimer = () => { clearInterval(starManCountDown.current); }

  // OTHER EXPORTED FUNCTIONS to update state:
  const selectBrother = (bro) => setMarioState(prevState => ({
    ...prevState, brother: bro, }));

  const makeSuper = () => setMarioState(prevState => ({
    ...prevState, super: true }));

  const makeSmall = () => setMarioState(prevState => ({ 
    ...prevState, super: false, }));

  const makeFire = () => setMarioState(prevState => ({ 
    ...prevState, fire: true, super: true, }));

  const loseFire = () => setMarioState(prevState => ({ 
    ...prevState, fire: false, super: false, }));

  const makeInvincible = () => setMarioState(prevState => ({
    ...prevState, invincible: true, invinciTimer: 10, }));

  const endInvincible = () => setMarioState(prevState => ({
    ...prevState, invincible: false, }));

  const addLife = () => setMarioState(prevState => ({
    ...prevState, lives: marioState.lives +1, }));

  const oneHundredCoins = () => setMarioState(prevState => ({
    ...prevState, coins: 0, lives: marioState.lives +1 }));

  const loseLife = () => { 
    console.log("global.mario.loseLife() ran")
    setMarioState(prevState => ({
    ...prevState, lives: marioState.lives -1, alive: false, }));
    global.time.stopTimer();
  }

  const enemyLogic = () => {
    switch (true) {
      case marioState.invincible:
        break; // Mario/Luigi is Invincible, no state change
      case marioState.fire:
        loseFire();
        break;
      case marioState.super:
        makeSmall();
        break;
      default:
        loseLife();
    }
  };

  const newLifeLogic = () => {
    if (marioState.alive) {
      alert("Mario/Luigi is still alive. Try dying first.");
    } else if (marioState.lives > 0) { // Load new life, reset state
      setMarioState(prevState => ({
      ...prevState, alive: true, invincible: false, super: false, timer: 100, }));
      startTimer();
    } else {
      alert("GAME OVER. Please start a new game.")
    }
  };

  const resetGame = () => {
    setMarioState({ ...initialMarioState, brother: marioState.brother }); // RESET marioState to initial paramaters, but keep current brother:
    startTimer();
  }

  const addCoin = () => setMarioState(prevState => ({
    ...prevState, coins: marioState.coins +1, points: addLeadingZeroes((parseInt(marioState.points) +200), 6) })); 
    // Convert marioState.points into a number, add 200 points, convert back into string with leading zeroes:

  function addLeadingZeroes(number, places) {
    return String(number).padStart(places, '0'); // Stringifies number and adds leading zeroes:
  }
    
  return { marioState, selectBrother, makeSuper, makeSmall, makeFire, loseFire, makeInvincible, endInvincible, addLife, loseLife, 
    addLeadingZeroes, addCoin, oneHundredCoins, enemyLogic, newLifeLogic, resetGame, timerCountDown, startTimer, stopTimer, };
    // DO NOT RETURN setMarioState and use it to update the state outside useMarioState(). This causes buggy 
    // behavior, (including multiple calls, random timeouts, etc.)
    // INSTEAD: Author a new function here, calling setMarioState (with any desired update parameters, 
    // (see addLife() above as an example)), and return this new function instead.
}