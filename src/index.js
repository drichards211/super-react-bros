import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScoreBoard from './scoreboard';
import MarioContainer from './mariocontainer';
import Buttons from './buttons';
import Timer from './timer';
import useMarioState from './use.mariostate';
import * as serviceWorker from './serviceWorker';
import global from './global';

function App() {
  global.mario = useMarioState(); // makes custom hook global.
  /* timer = Timer(); */
  
  return ( 
    <div>
      <ScoreBoard/>
      <MarioContainer/>
      <Buttons/>
    </div> 
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
