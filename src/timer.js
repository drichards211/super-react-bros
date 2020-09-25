import { useState, useEffect, useRef, } from 'react';
import { useSelector, useDispatch, dispatch, } from 'react-redux';
import store from './store';

let countDown;
let starManCountDown;

export function StartTimer() {
  countDown = setInterval(function() {
    store.dispatch({ type: "DECREMENT_TIMER" })
    /* resetTime(t => t -1,); // Functional update form of setState */
  }, 1000);
}

export function StopTimer() {
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