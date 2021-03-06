import { createStore } from "redux";
import { AddLeadingZeroes } from "./helpers";

// REDUX STATE MANAGEMENT:
const initialState = {
  brother: "mario",
  super: false,
  fire: false,
  invincible: false,
  starManTimer: 0,
  alive: true,
  inPlay: true,
  helpVisible: false,
  points: "000000",
  lives: 3,
  coins: 0,
  timer: 400,
  buttonDepressed: {
    buttonMushroom: false,
    buttonFire: false,
    buttonCoin: false,
    buttonStar: false,
    buttonEnemy: false,
    buttonOneUp: false,
    buttonBrosToggle: false,
    buttonQuestion: false,
  },
  actionButtonDepressed: {
    buttonStop: false,
    buttonWalkLeft: false,
    buttonWalkRight: false,
    buttonClimb: false,
    buttonDuck: false,
    buttonJump: false,
    buttonFire: false,
  },
  dPad: "d-right",
  brotherSlipLeft: false,
  brotherSlipRight: false,
};

function reducer(state = initialState, action) {
  if ( action.type !== "DECREMENT_TIMER" 
    && action.type !== "DECREMENT_STARMANTIMER" ) { 
      console.log(`reducer() ran ${action.type}`);
  }
  switch (action.type) {
    case "INCREMENT_LIVES":
      return {
        ...state,
        lives: state.lives + 1,
      };
    case "DECREMENT_LIVES":
      return {
        ...state,
        lives: state.lives - 1,
      };
    case "START_NEW_LIFE":
      return {
        ...state,
        alive: true,
        invincible: false,
        starManTimer: 0,
        super: false,
        fire: false,
        timer: 400,
        buttonDepressed: {
          buttonMushroom: false,
          buttonFire: false,
          buttonCoin: false,
          buttonStar: false,
          buttonEnemy: false,
          buttonOneUp: false,
          buttonBrosToggle: false,
          buttonQuestion: false,
        },
        actionButtonDepressed: {
          buttonStop: false,
          buttonWalkLeft: false,
          buttonWalkRight: false,
          buttonClimb: false,
          buttonDuck: false,
          buttonJump: false,
          buttonFire: false,
        },
        dPad: "d-right",
        brotherSlipLeft: false,
        brotherSlipRight: false,
        jumping: false,
      };
    case "MAKE_SUPER":
      return {
        ...state,
        super: true,
        points: AddLeadingZeroes(parseInt(state.points) + 1000, 6),
      };
    case "MAKE_FIRE":
      return {
        ...state,
        fire: true,
        super: true,
        points: AddLeadingZeroes(parseInt(state.points) + 1000, 6),
      };
    case "MAKE_INVINCIBLE":
      return {
        ...state,
        invincible: true,
        starManTimer: 10,
        points: AddLeadingZeroes(parseInt(state.points) + 1000, 6),
      };
    case "END_INVINCIBLE":
      return {
        ...state,
        invincible: false,
        starManTimer: 0,
      };
    case "MAKE_SMALL":
      return {
        ...state,
        super: false,
      };
    case "LOSE_FIRE":
      return {
        ...state,
        fire: false,
        super: false,
      };
    case "LOSE_LIFE":
      return {
        ...state,
        alive: false,
        lives: state.lives - 1,
      };
    case "SELECT_MARIO":
      return {
        ...state,
        brother: "mario",
      };
    case "SELECT_LUIGI":
      return {
        ...state,
        brother: "luigi",
      };
    case "ADD_COIN":
      return {
        ...state,
        coins: state.coins + 1,
        points: AddLeadingZeroes(parseInt(state.points) + 200, 6),
      };
    case "RESET_100_COINS":
      return {
        ...state,
        coins: 0,
        lives: state.lives + 1,
      };
    case "RESET_GAME":
      // RESET marioState to initial paramaters, but keep current brother:
      return {
        ...initialState,
        brother: state.brother,
      };
    case "RESET_STARMANTIMER":
      return {
        ...state,
        starManTimer: 0,
      };
    case "DECREMENT_TIMER":
      return {
        ...state,
        timer: state.timer - 1,
      };
    case "DECREMENT_STARMANTIMER":
      return {
        ...state,
        starManTimer: state.starManTimer - 1,
      };
    case "SHOW_DEATH_SCREEN":
      return {
        ...state,
        inPlay: false,
      };
    case "HIDE_DEATH_SCREEN":
      return {
        ...state,
        inPlay: true,
      };
    case "SHOW_HELP":
      return {
        ...state,
        helpVisible: true,
      };
    case "DEPRESS_BUTTON":
      return {
          ...state,
          buttonDepressed: {
            ...state.buttonDepressed,
            [action.payload]: true,
          }
      };
    case "UNPRESS_BUTTON":
      return {
          ...state,
          buttonDepressed: {
            ...state.buttonDepressed,
            [action.payload]: false,
          }
      };
    case "DEPRESS_ACTION_BUTTON":
      return {
          ...state,
          actionButtonDepressed: {
            ...state.actionButtonDepressed,
            [action.payload]: true,
          }
      };
    case "UNPRESS_ACTION_BUTTON":
      return {
          ...state,
          actionButtonDepressed: {
            ...state.actionButtonDepressed,
            [action.payload]: false,
          }
      };
    case "UPDATE_DPAD":
      return {
        ...state,
        dPad: action.payload,
      };
    case "SLIP_LEFT":
      return {
        ...state,
        brotherSlipLeft: true,
      };
    case "SLIP_RIGHT":
      return {
        ...state,
        brotherSlipRight: true,
      };
    case "CANCEL_SLIP":
      return {
        ...state,
        brotherSlipLeft: false,
        brotherSlipRight: false,
      };
    case "JUMP":
      return {
        ...state,
        jumping: true,
      }
    case "CANCEL_JUMP":
      return {
        ...state,
        jumping: false,
      }
    default:
      console.log(`${action.type} is an invalid reducer action.`);
      return state; // Return the unchanged state if action is unclear
  }
}

const store = createStore(reducer);
console.log("created", store.getState());

export default store;
