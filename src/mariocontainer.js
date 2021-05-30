import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function MarioContainer() {
  const dispatch = useDispatch();
  const marioState = useSelector((state) => state);

  let marioClass = "Render-brother "; // Holds different CSS class names for rendering Mario/Luigi sprites

  // MARIO SPRITE DISPLAY LOGIC:
  switch (true) {
    case marioState.alive && marioState.invincible: // Mario-Luigi is INVINCIBLE:
      marioClass += marioState.super ? "invincible-super" : "invincible";
      break;
    case marioState.alive && marioState.brother === "mario": // Mario is ALIVE:
      if (marioState.fire) {
        // Mario is FIRE:
        marioClass += "fire";
      } else {
        marioClass += marioState.super ? "mario-super" : "mario"; // SUPER Mario / Mario
      }
      break;
    case marioState.alive && marioState.brother === "luigi": // Luigi is ALIVE:
      if (marioState.fire) {
        // Luigi is FIRE:
        marioClass += "fire";
      } else {
        marioClass += marioState.super ? "luigi-super" : "luigi"; // SUPER Luigi / Luigi
      }
      break;
    default:
      // MARIO-LUIGI is DEAD:
      switch (true) {
        case marioState.timer === 0 && marioState.fire: // TIMER ran out while Mario-Luigi was Fire:
          marioClass += "fire-dead";
          console.log("Timer ran out while Mario-Luigi was Fire");
          break;
        case marioState.timer === 0: // TIMER ran out:
          console.log("Timer ran out");
          if (marioState.brother === "luigi") {
            marioClass += "luigi-dead";
          } else {
            marioClass += "mario-dead";
          }
          break;
        case marioState.brother === "luigi": // Luigi is DEAD:
          marioClass += "luigi-dead";
          break;
        default:
          // Mario is DEAD:
          marioClass += "mario-dead";
        }
  }
  // MARIO SPRITE ACTION LOGIC:
  switch (true) {
    case marioState.dPad === "d-up":
      marioClass += " move-up";
      break;
    case marioState.dPad === "d-right":
      marioClass += " move-right";
      break;
    case marioState.dPad === "d-down":
      marioClass += " move-down";
      break;
    case marioState.dPad === "d-stop":
      marioClass += " move-stop";
      break;  
    default:
      marioClass += " move-left";
  }

  return (
    <div className="mario-container">
      {" "}
      <div className={marioClass}></div>{" "}
    </div>
  );
}
