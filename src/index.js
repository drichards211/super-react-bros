import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './normalize.css';
import store from './store';
import ScoreBoard from './scoreboard';
import MarioContainer from './mariocontainer';
import DeathScreen from './deathscreen';
import Buttons from './buttons';
import * as serviceWorker from './serviceWorker';

function App() {
  return ( 
    <Provider store={store}>
      <ScoreBoard/>
      <MarioContainer/>
      <DeathScreen/>
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
