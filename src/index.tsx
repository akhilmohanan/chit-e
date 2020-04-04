import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { History, LocationState } from 'history'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StoreProcedure from './store/store'

const storeProcedure = new StoreProcedure;
const history: History<LocationState> = storeProcedure.history;
const store = storeProcedure.getStore(); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App history={history}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
