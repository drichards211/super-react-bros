import store from './store';

// Variables declared early so clearInterval() can actually stop the timers:
let countDown;
let starManCountDown;

export function StartTimer() {
  console.log("StartTimer() ran");
  let localTimer = 100;
  countDown = setInterval(function() {
    if (localTimer === 1) {
      localTimer = localTimer -1;
      StopTimer();
      StopStarManTimer(); // Stop StarMan countdown if Mario/Luigi is invincible when timer runs out
      store.dispatch({ type: "DECREMENT_TIMER" }); // Final decrement to zero
      store.dispatch({ type: "LOSE_LIFE"}); // Kill Mario/Luigi if timer runs out
    } else {
      localTimer = localTimer -1;
      store.dispatch({ type: "DECREMENT_TIMER" });
    }
  }, 1000);
}

export function StopTimer() {
  console.log("StopTimer() ran");
  clearInterval(countDown);
}

export function StartStarManTimer() {
  console.log("StartStarManTimer() ran");
  let localStarManTimer = 10;
  starManCountDown = setInterval(function() {
    if (localStarManTimer === 1) {
      localStarManTimer = localStarManTimer -1;
      StopStarManTimer();
      store.dispatch({ type: "END_INVINCIBLE" });
    } else {
      localStarManTimer = localStarManTimer -1;
      store.dispatch({ type: "DECREMENT_STARMANTIMER" })
    }
  }, 1000);
}

export function StopStarManTimer() {
  console.log("StopStarManTimer() ran");
  clearInterval(starManCountDown);
}

export function StopAllTimers() {
  console.log("StopAllTimers() ran");
  clearInterval(countDown);
  clearInterval(starManCountDown);
}
