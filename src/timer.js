import store from './store';

// Variables declared early so clearInterval() can actually stop the timers:
let countDown;
let starManCountDown;

export function StartTimer() {
  console.log("StartTimer() ran");
  countDown = setInterval(function() {
    const marioState = store.getState(); // obtain fresh copy of redux state on each iteration:
    if (marioState.timer === 1) {
      StopTimer();
      StopStarManTimer(); // Stop StarMan countdown if Mario/Luigi is invincible when timer runs out
      store.dispatch({ type: "DECREMENT_TIMER" }); // Final decrement to zero
      store.dispatch({ type: "LOSE_LIFE"}); // Kill Mario/Luigi if timer runs out
      ManageDeathScreen();
    } else {
      store.dispatch({ type: "DECREMENT_TIMER" });
    }
  }, 420);
}

export function StopTimer() {
  console.log("StopTimer() ran");
  clearInterval(countDown);
}

export function StartStarManTimer() {
  console.log("StartStarManTimer() ran");
  starManCountDown = setInterval(function() {
    const marioState = store.getState(); // obtain fresh copy of redux state on each iteration:
    if (marioState.starManTimer === 1) {
      StopStarManTimer();
      store.dispatch({ type: "END_INVINCIBLE" });
    } else {
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

export function ManageDeathScreen() {
// Wait 2 seconds for death animation to finish, then show Death Screen:
  console.log("ManageDeathScreen() ran");
  const marioState = store.getState();
  setTimeout(function() {
    store.dispatch({ type: "SHOW_DEATH_SCREEN" });
    if (marioState.lives > 0) { // Mario-Luigi has extra lives remaining. Hold death screen for 3 seconds, then resume game.
      setTimeout(function() {
        store.dispatch({ type: "START_NEW_LIFE" });
        store.dispatch({ type: "HIDE_DEATH_SCREEN" });
        StartTimer();
      }, 3000);
    }
  }, 2000);
}
