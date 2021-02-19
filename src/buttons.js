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
  let buttonClass = {
    buttonMushroom: "item-button button-mushroom ",
    buttonFire: "item-button button-fire ",
    buttonStar: "",
    buttonEnemy: "",
    buttonCoin: "item-button button-coin ",
    buttonOneUp: "item-button button-oneup ",
    buttonBrosToggle: "",
    buttonQuestion: "",
  }

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

  // Manage button Depressed states:
  Object.keys(marioState.buttonDepressed).forEach(function (key) {
    switch (true) {
      case marioState.buttonDepressed[key]:
        buttonClass[key]  += "depressed";
        break;
      default:
        buttonClass[key] = buttonClass[key].replace("depressed","");
    }
  });
  
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

  const animateButtonPress = (buttonName) => {
    dispatch({ type: `DEPRESS_BUTTON`, payload: `${buttonName}` });
    setTimeout(function () {
      dispatch({ type: `UNPRESS_BUTTON`, payload: `${buttonName}` });  
    }, 400);
  }

  // BUTTONS:
  const buttonMushroom = (
    <button
      className={buttonClass.buttonMushroom}
      onClick={() => {
        dispatch({ type: "MAKE_SUPER" });
        NoiseMaker("power-up");
        animateButtonPress(`buttonMushroom`);
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
    <button 
      className={buttonClass.buttonFire} 
      onClick={() => {
        handleFireLogic();
        NoiseMaker("power-up");
        animateButtonPress("buttonFire");
      }}
    >
      <div className="align-me">_</div>
      <span></span>
    </button>
  );

  const buttonCoin = (
    <button
      className={buttonClass.buttonCoin}
      onClick={() => {
        dispatch({ type: "ADD_COIN" });
        if (marioState.coins < 99) {
          NoiseMaker("coin");
        }
        animateButtonPress("buttonCoin");
      }}
    >
      <div className="align-me">_</div>
      <span className="glow-coin"></span>
    </button>
  );

  const buttonOneUp = (
    <button
      className={buttonClass.buttonOneUp}
      onClick={() => {
        dispatch({ type: "INCREMENT_LIVES" });
        NoiseMaker("1up");
        animateButtonPress("buttonOneUp");
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
