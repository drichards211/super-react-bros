import React from "react";
import { useSelector, useDispatch } from "react-redux"; // redux hooks specific
import { NoiseMaker } from "./helpers";

export default function ActionButtons() {
  // Global state management via Redux Hooks:
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

  // Holds update-able CSS class names for buttons:
  let buttonClass = {
    buttonStop: "button-action action-stop d-right",
    buttonWalkLeft: "button-action action-left d-right",
    buttonWalkRight: "button-action action-right d-right",
    buttonClimb: "button-action action-climb d-right",
    buttonDuck: "button-action action-duck d-right",
    buttonJump: "button-action a ",
    buttonFire: "button-action b action-fire ",
  };
  
  // Manage action button Depressed states:
  Object.keys(marioState.actionButtonDepressed).forEach(function (key) {
    switch (true) {
      case marioState.actionButtonDepressed[key]: // Button has been pressed:
        buttonClass[key]  += "depressed "; // Add "depressed" class to button
        break;
      default:
        // Restore normal button appearance
        buttonClass[key] = buttonClass[key].replace("depressed ","");
    }
  });

  // Manage D-Pad appearance:
  Object.keys(buttonClass).forEach(key => { 
    buttonClass[key] = buttonClass[key].replace("d-right","d-" +marioState.dPad);
    buttonClass[key] = buttonClass[key].replace("d-left","d-" +marioState.dPad);
    buttonClass[key] = buttonClass[key].replace("d-stop","d-" +marioState.dPad);
    buttonClass[key] = buttonClass[key].replace("d-up","d-" +marioState.dPad);
    buttonClass[key] = buttonClass[key].replace("d-down","d-" +marioState.dPad);
  });

  // Button-specific helper functions:
  const animateButtonPress = (buttonName) => {
    dispatch({ type: `DEPRESS_ACTION_BUTTON`, payload: buttonName });
    setTimeout(function () {
      dispatch({ type: `UNPRESS_ACTION_BUTTON`, payload: buttonName });
    }, 400);
  }
  const animateDpad = (direction) => {
    dispatch({ type: `UPDATE_DPAD`, payload: direction });
  }

  // ACTION BUTTONS:
  const nesController = (
    <div 
      className="controller"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    ></div>
  );
  
  const buttonStop = (
    <button 
      className={buttonClass.buttonStop}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("stop");
      }}
    >♦</button>
  );

  const buttonWalkLeft = (
    <button 
      className={buttonClass.buttonWalkLeft}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("left");
      }}
    >◀</button>
  );

  const buttonWalkRight = (
    <button 
      className={buttonClass.buttonWalkRight}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("right");
      }}
    >▶</button>
  );

  const buttonRun = (
    <button 
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >RUN</button>
  );

  const buttonJump = (
    <button 
      className={buttonClass.buttonJump}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("jump");
        animateButtonPress("buttonJump");
      }}
    >↑</button>
  );

  const buttonClimb = (
    <button 
      className={buttonClass.buttonClimb}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("up");
      }}
    >▲</button>
  );

  const buttonDuck = (
    <button 
      className={buttonClass.buttonDuck}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("down");
      }}
    >▼</button>
  );

  const buttonSwim = (
    <button 
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >SWIM</button>
  );

  const buttonFire = (
    <button 
      className={buttonClass.buttonFire}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("fireball");
        animateButtonPress("buttonFire");
      }}
    ><span></span></button>
  );

  return (
    <div className="action-button-container">
      <div className="square-buttons-wrap">
        <div className="square-buttons">
          {buttonClimb}
          <div className="break"></div> 
          {buttonWalkLeft} {buttonStop} {buttonWalkRight}
          <div className="break"></div>
          {buttonDuck}
        </div>
      </div>
      <div className="round-buttons"> {buttonFire} {buttonJump} </div> 
    </div>
  );

}