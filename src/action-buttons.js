import React from "react";
import { useSelector, useDispatch } from "react-redux"; // redux hooks specific
import { NoiseMaker } from "./helpers";

export default function ActionButtons() {
  // Global state management via Redux Hooks:
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

  // Holds update-able CSS class names for buttons:
  let buttonClass = {
    buttonJump: "button-action a ",
    buttonFire: "button-action b action-fire ",
  }
  
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

  // Button-specific helper functions:
  const animateButtonPress = (buttonName) => {
    dispatch({ type: `DEPRESS_ACTION_BUTTON`, payload: `${buttonName}` });
    setTimeout(function () {
      dispatch({ type: `UNPRESS_ACTION_BUTTON`, payload: `${buttonName}` });  
    }, 400);
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
      className="button-action action-stop"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
      }}
    >♦</button>
  );

  const buttonWalkLeft = (
    <button 
      className="button-action action-left"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
      }}
    >◀</button>
  );

  const buttonWalkRight = (
    <button 
      className="button-action action-right"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
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
      className="button-action action-climb"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
      }}
    >▲</button>
  );

  const buttonDuck = (
    <button 
      className="button-action action-duck"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
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