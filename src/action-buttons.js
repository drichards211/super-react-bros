import React from "react";
import { useSelector, useDispatch } from "react-redux"; // redux hooks specific
import { NoiseMaker } from "./helpers";

export default function ActionButtons() {
  // Global state management via Redux Hooks:
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

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
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
      }}
    >◀</button>
  );

  const buttonWalkRight = (
    <button 
      className="button-action"
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
      className="button-action a"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("jump");
      }}
    >↑</button>
  );

  const buttonClimb = (
    <button 
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >↑</button>
  );

  const buttonDuck = (
    <button 
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >↓</button>
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
      className="button-action b action-fire"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("fireball");
      }}
    ></button>
  );

  return (
    <div className="action-button-container">
      {buttonWalkLeft} {buttonStop} {buttonWalkRight} {buttonJump} {buttonFire} 
    </div>
  );

}