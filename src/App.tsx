import React from 'react';
import { History, LocationState } from 'history'
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import './App.css';
import Login from './pages/login/login';


function App(props: {history: History<LocationState>}) {

  const history: History<LocationState> = props.history;

  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
