import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StartTimer, StopAllTimers } from "./timer";

export default function DeathScreen() {
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

  let messageClass = "message-holder "; // Holds different CSS class names for the Death and Game Over messages
  let userMessage = "";
  let tryAgain = "button-restart ";

  const handleNewGame = () => {
    dispatch({ type: "RESET_GAME" });
    StopAllTimers();
    StartTimer();
  };

  const MarioMessages = ({ message }) => {
    return (
      <div className={messageClass}>
        {" "}
        <div className="message-contents">
          {message}
          <br /><br />
          <button
            className={tryAgain}
            onClick={() => handleNewGame()}
          >
            TRY AGAIN ?
          </button>
        </div>{" "}
      </div>
    );
  };
  
  // DEATH SCREEN DISPLAY LOGIC:
  if (!marioState.inPlay) {
    // Display Death Screen:
    messageClass += "death-screen";
  }
  if (!marioState.alive) {
    // Mario-Luigi is DEAD:
    if (marioState.timer === 0) {
      // Timer ran out:
      userMessage = marioState.lives === 0 ? "GAME OVER" : "TIME UP";
      tryAgain += marioState.lives === 0 ? "show-button" : "";
    } else {
      // Mario-Luigi DEAD from enemy:
      userMessage =
        marioState.lives === 0
          ? "GAME OVER"
          : marioState.brother === "luigi"
          ? "LUIGI × " + marioState.lives
          : "MARIO × " + marioState.lives;
      tryAgain += marioState.lives === 0 ? "show-button" : "";
      
    }
  }

  return <MarioMessages message={userMessage} />;
}
