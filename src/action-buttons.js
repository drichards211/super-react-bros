import React from "react";
import { useSelector, useDispatch } from "react-redux"; // redux hooks specific
import { NoiseMaker } from "./helpers";

export default function ActionButtons() {
  // Global state management via Redux Hooks:
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

  // Holds update-able CSS class names for buttons:
  /* let buttonClass = {
    buttonJump: "button-action a ",
    buttonFire: "button-action b action-fire ",
  }; */
  
  // Manage action button Depressed states:
  /* Object.keys(marioState.actionButtonDepressed).forEach(function (key) {
    switch (true) {
      case marioState.actionButtonDepressed[key]: // Button has been pressed:
        buttonClass[key]  += "depressed "; // Add "depressed" class to button
        break;
      default:
        // Restore normal button appearance
        buttonClass[key] = buttonClass[key].replace("depressed ","");
    }
  }); */

  // Manage D-Pad appearance:
  /* Object.keys(buttonClass).forEach(key => { 
    buttonClass[key] = buttonClass[key].replace("d-right",marioState.dPad);
    buttonClass[key] = buttonClass[key].replace("d-left",marioState.dPad);
    buttonClass[key] = buttonClass[key].replace("d-stop",marioState.dPad);
    buttonClass[key] = buttonClass[key].replace("d-up",marioState.dPad);
    buttonClass[key] = buttonClass[key].replace("d-down",marioState.dPad);
    buttonClass[key] = buttonClass[key].replace("d-down",marioState.dPad);
  }); */

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
      className={`button-action action-stop ${marioState.dPad} ${+marioState.actionButtonDepressed.buttonStop ? "depressed" : ""}`}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("d-stop");
        animateButtonPress("buttonStop");
      }}
    >♦</button>
  );

  const buttonWalkLeft = (
    <button 
      className={`button-action action-left ${marioState.dPad} ${+marioState.actionButtonDepressed.buttonWalkLeft ? "depressed" : ""}`}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("d-left");
        animateButtonPress("buttonWalkLeft");
      }}
    >◀</button>
  );

  const buttonWalkRight = (
    <button 
      className={`button-action action-right ${marioState.dPad} ${+marioState.actionButtonDepressed.buttonWalkRight ? "depressed" : ""}`}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("d-right");
        animateButtonPress("buttonWalkRight");
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
      className={`button-action a ${marioState.actionButtonDepressed.buttonJump ? "depressed" : ""}`}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("jump");
        animateButtonPress("buttonJump");
      }}
    >↑</button>
  );

  const buttonClimb = (
    <button 
      className={`button-action action-climb ${marioState.dPad} ${+marioState.actionButtonDepressed.buttonClimb ? "depressed" : ""}`}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("d-up");
        animateButtonPress("buttonClimb");
      }}
    >▲</button>
  );

  const buttonDuck = (
    <button 
      className={`button-action action-duck ${marioState.dPad} ${+marioState.actionButtonDepressed.buttonDuck ? "depressed" : ""}`}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        animateDpad("d-down");
        animateButtonPress("buttonDuck");
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
      className={`button-action b action-fire ${marioState.actionButtonDepressed.buttonFire ? "depressed" : ""}`}
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("fireball");
        animateButtonPress("buttonFire");
      }}
    ><span></span></button>
  );

  return (
    <div className="action-button-container">
      <div className={"square-buttons-wrap "+marioState.dPad}>
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