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
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >STOP</button>
  );

  const buttonWalk = (
    <button 
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >WALK</button>
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
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >JUMP</button>
  );

  const buttonClimb = (
    <button 
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >CLIMB</button>
  );

  const buttonDuck = (
    <button 
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >DUCK</button>
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
      className="button-action"
      onClick={() => {
        dispatch({ type: "SHOW_HELP" });
        NoiseMaker("pause");
      }}
    >FIRE</button>
  );

  return (
    <div className="action-button-container">
      {/* {buttonStop} {buttonWalk} {buttonRun} {buttonJump} {buttonDuck} {buttonFire}  */}
      {nesController}
    </div>
  );

}