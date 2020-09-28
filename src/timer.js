import { useState, useEffect, useRef, } from 'react';
import { useSelector, useDispatch, dispatch, } from 'react-redux';
import store from './store';

let countDown;
let starManCountDown;

export function StartTimer() {
  console.log("StartTimer() ran");
  let localTimer = 10;
  console.log(`localTimer = ${localTimer}`);
  countDown = setInterval(function() {
    if (localTimer === 1) {
      localTimer = localTimer -1;
      StopTimer();
      store.dispatch({ type: "DECREMENT_TIMER" });
      store.dispatch({ type: "LOSE_LIFE"}); // Kill Mario/Luigi if timer runs out
    } else {
      localTimer = localTimer -1;
      console.log(`localTimer = ${localTimer}`);
      store.dispatch({ type: "DECREMENT_TIMER" })
    }
  }, 1000);
}

export function StopTimer() {
  console.log("StopTimer() ran");
  clearInterval(countDown);
}

export function StartStarManTimer() {
  starManCountDown = setInterval(function() {
    store.dispatch({ type: "DECREMENT_STARMANTIMER" })
    /* resetTime(t => t -1,); // Functional update form of setState */
  }, 1000);
}

export function StopStarManTimer() {
  clearInterval(starManCountDown);
}