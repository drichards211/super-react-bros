import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import ScoreBoard from './scoreboard';
import MarioContainer from './mariocontainer';
import Buttons from './buttons';
import * as serviceWorker from './serviceWorker';
import AddLeadingZeroes from './helpers';

// REDUX STATE MANAGEMENT:
const initialState = {
  brother: "mario",
  super: false,
  fire: false,
  invincible: false,
  starManTimer: 0,
  alive: true,
  points: "000000",
  lives: 3,
  coins: 0,
  timer: 100,
};

function reducer(state = initialState, action) {
  console.log('reducer() ran', action);
  switch(action.type) {
    case "INCREMENT_LIVES":
      return {
        ...state,
        lives: state.lives +1,
      }
    case "DECREMENT_LIVES":
      return {
        ...state,
        lives: state.lives -1,
      }
    case "START_NEW_LIFE":
      return {
        ...state,
        alive: true, 
        invincible: false, 
        super: false, 
        timer: 100,
      }
    case "MAKE_SUPER":
      return {
        ...state,
        super: true,
        points: AddLeadingZeroes((parseInt(state.points) +1000), 6),
      }
    case "MAKE_FIRE":
      return {
        ...state,
        fire: true,
        super: true,
        points: AddLeadingZeroes((parseInt(state.points) +1000), 6),
      }
    case "MAKE_INVINCIBLE":
      return {
        ...state,
        invincible: true, 
        starManTimer: 10,
      }
    case "END_INVINCIBLE":
      return {
        ...state,
        invincible: false,
        starManTimer: 0,
      }
    case "MAKE_SMALL":
      return {
        ...state,
        super: false,
      }
    case "LOSE_FIRE":
      return {
        ...state,
        fire: false,
        super: false,
      }
    case "LOSE_LIFE":
      return {
        ...state,
        alive: false,
      }
    case "SELECT_MARIO":
      return {
        ...state,
        brother: "mario",
      }
    case "SELECT_LUIGI":
      return {
        ...state,
        brother: "luigi",
      }
    case "ADD_COIN":
      return {
        ...state,
        coins: state.coins +1, 
        points: AddLeadingZeroes((parseInt(state.points) +200), 6),
      }
    case "RESET_100_COINS":
      return {
        ...state,
        coins: 0, 
        lives: state.lives +1,
      }
    case "RESET_GAME":
    // RESET marioState to initial paramaters, but keep current brother:  
      return {
        ...initialState,
        brother: state.brother,
      }
    default:
      console.log(`${action.type} is an invalid reducer action.`);
      return state; // Return the unchanged state if action is unclear
  };

}

const store = createStore(reducer);
console.log('created', store.getState());
/* store.dispatch({ type: 'INCREMENT_LIVES' }); */
/* console.log('updated', store.getState()); */

function App() {
  
  return ( 
    <Provider store={store}>
      <ScoreBoard/>
      <MarioContainer/>
      <Buttons/>
    </Provider> 
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
