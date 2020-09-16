import { useState, useEffect, useRef, } from 'react';
import global from './global';

export default function useTimers() {

  let [timer, resetTime] = useState(global.mario.marioState.timer);
  let [invinciTimer, resetInvinciTimer] = useState(10);

  let timerCountDown = useRef(timer); // useRef allows clearInterval to access the variable, (a fun React gotcha).
  let starManCountDown = useRef(invinciTimer); 
  
  useEffect(() => { // Keep timerCountDown current, (another fun React gotcha).
    timerCountDown.current = timer 
  }, [timer]);
  useEffect(() => { 
    starManCountDown.current = invinciTimer 
  }, [invinciTimer]);
  
  const startTimer = () => {
    timerCountDown.current = setInterval(function() {
      handleTimer();
      resetTime(timer => timer -1, );
    }, 1000);
  }

  const handleTimer = () => {
    if (timerCountDown.current === 1) { // startTimer calls this exactly 1 second late, thus === 1 instead of 0.
      console.log("TIMES UP");
      global.mario.loseLife();
    }
  }

  const stopTimer = () => {
    console.log("global.time.stopTimer() ran");
    console.log(timerCountDown.current);
    clearInterval(timerCountDown.current); 
  }

  const resetTimer = () => {

  }

  const startStarManTimer = () => {

  }

  const stopStarManTimer = () => {

  }

  const resetStarManTimer = () => {

  }



  return { timer, startTimer, stopTimer, resetTimer, startStarManTimer, stopStarManTimer, resetStarManTimer }
} 