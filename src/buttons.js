import React from "react";
import { useSelector, useDispatch } from "react-redux"; // redux hooks specific
import { NoiseMaker } from "./helpers";
import {
  StartStarManTimer,
  StopStarManTimer,
  StartTimer,
  StopAllTimers,
  ManageDeathScreen,
} from "./timer";

export default function Buttons() {
  // Global state management via Redux Hooks:
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

  // Holds update-able CSS class names for buttons:
  let buttonStarClass = "item-button button-starman ";
  let buttonStarSpanClass = "";
  let buttonBrosToggleClass = "";

  // Manage buttonStar appearance:
  switch (true) {
    case marioState.invincible: // Mario-Luigi is INVINCIBLE:
      buttonStarClass += "show-star-countdown";
      buttonStarSpanClass += "flicker-star";
      break;
    default:
      // Mario-Luigi is NOT invincible:
      buttonStarClass += "hide-star-countdown";
  }

  // Manage buttonToggleBros appearance:
  switch (true) {
    case marioState.brother === "luigi": // Active bros is Luigi:
      buttonBrosToggleClass += "toggle-mario"; // Display Mario toggle
      break;
    default:
      // Active bros is Mario:
      buttonBrosToggleClass += "toggle-luigi"; // Display Luigi toggle
  }

  // Button-specific helper functions:
  const handleEnemy = () => {
    switch (true) {
      case marioState.invincible: // Mario/Luigi is Invincible, no state change
        break;
      case marioState.fire:
        dispatch({ type: "LOSE_FIRE" });
        NoiseMaker("shrink");
        break;
      case marioState.super:
        dispatch({ type: "MAKE_SMALL" });
        NoiseMaker("shrink");
        break;
      default:
        StopAllTimers();
        dispatch({ type: "LOSE_LIFE" });
        NoiseMaker("death");
        ManageDeathScreen();
    }
  };

  const handleNewGame = () => {
    dispatch({ type: "RESET_GAME" });
    StopAllTimers();
    StartTimer();
  };

  const newLifeLogic = () => {
    if (marioState.alive) {
      alert("Mario/Luigi is still alive. Try dying first.");
    } else if (marioState.lives > 0) {
      // Load new life, reset state
      dispatch({ type: "START_NEW_LIFE" });
      StartTimer();
    } else {
      alert("GAME OVER. Please start a new game.");
    }
  };

  const handleFireLogic = () => {
    NoiseMaker("power-up");
    switch (marioState.super) {
      case true:
        dispatch({ type: "MAKE_FIRE" });
        break;
      default:
        dispatch({ type: "MAKE_SUPER" });
    }
  };

  const handleButtonStar = () => {
    dispatch({ type: "MAKE_INVINCIBLE" });
    NoiseMaker("power-up");
    StopStarManTimer(); // End any ongoing timer before starting another countdown
    StartStarManTimer();
  };

  const handleButtonEndStar = () => {
    dispatch({ type: "END_INVINCIBLE" });
    StopStarManTimer();
  };

  const handlePlayerToggle = () => {
    if (marioState.brother === "mario") {
      dispatch({ type: "SELECT_LUIGI" });
    } else {
      dispatch({ type: "SELECT_MARIO" });
    }
  };

  // BUTTONS:
  const buttonMushroom = (
    <button
      className="item-button button-mushroom"
      onClick={() => {
        dispatch({ type: "MAKE_SUPER" })
        NoiseMaker("power-up");
      }}
    >
      <div className="align-me">_</div>
      <span></span>
    </button>
  );

  const buttonStar = (
    <button className={buttonStarClass} onClick={() => handleButtonStar()}>
      {" "}
      {marioState.starManTimer}{" "}
      <span className={buttonStarSpanClass}></span>
    </button>
  );

  const buttonEndStar = ( 
    <button onClick={() => handleButtonEndStar()}> Cancel Starman </button>
  ); // USED FOR TESTING

  const buttonEnemy = (
    <button className="item-button button-enemy" onClick={() => handleEnemy()}>
      <div className="align-me">_</div>
      <span className="walk-enemy"></span>
    </button>
  );

  const buttonFire = (
    <button className="item-button button-fire" onClick={() => handleFireLogic()}>
      <div className="align-me">_</div>
      <span></span>
    </button>
  );

  const buttonCoin = (
    <button
      className="item-button button-coin"
      onClick={() => {
        dispatch({ type: "ADD_COIN" });
        if (marioState.coins < 99) {
          NoiseMaker("coin");
        }
      }}
    >
      <div className="align-me">_</div>
      <span className="glow-coin"></span>
    </button>
  );

  const buttonOneUp = (
    <button
      className="item-button button-oneup"
      onClick={() => {
        dispatch({ type: "INCREMENT_LIVES" });
        NoiseMaker("1up");
      }}>
      <div className="align-me">_</div>
      <span></span>
    </button>
  );

  const buttonBrosToggle = (
    <button
      className="item-button button-bros-toggle"
      onClick={() => handlePlayerToggle()}
    >
      <div className="align-me">_</div>
      <span className={buttonBrosToggleClass}></span>
    </button>
  );

  const buttonQuestion = (
    <button
      className="item-button button-question"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >
      <div className="align-me">_</div>
      <span></span>
    </button>
  );

  const tryAgain = <button onClick={() => newLifeLogic()}> Try Again </button>; // USED FOR TESTING

  const newGame = <button onClick={() => handleNewGame()}> New Game </button>; // USED FOR TESTING
  
  return (
    <div className="item-button-container">
      {" "}
      {buttonMushroom} {buttonFire} {buttonStar} {buttonEnemy} {buttonCoin}{" "}
      {buttonOneUp} {buttonBrosToggle} {buttonQuestion}
      {" "}
    </div>
  );
}
