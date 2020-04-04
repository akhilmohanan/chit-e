import reducers from './reducers';
import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
  Reducer,
  ReducersMapObject,
  Store
  } from 'redux';
import { createBrowserHistory as createHistory, History, LocationState } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router'

import { IStoreProcedure } from './store.interface';
import { resetApp } from '../constants/typs';
import sampleData from './../sample-data'

class StoreProcedure implements IStoreProcedure {

  history: History<LocationState> = createHistory();

  getStore(): Store {

    const reducersObj: ReducersMapObject = reducers(sampleData.actions);
    
    const routeMiddleware: Middleware = routerMiddleware(this.history);

    const middlewares: Middleware[] = [
      thunk,
      routeMiddleware
    ]
  
    const appReducer: Reducer = combineReducers({
      ...reducersObj,
      router: connectRouter(this.history) as Reducer
    });

    const rootReducer = (state: any, action: Action): Reducer => {
      if (action.type === resetApp) {
        state = {router: state.router}
      }
      return appReducer(state, action);
    };
  
    const store = createStore( rootReducer, applyMiddleware(...middlewares) )
      
    return store;
  }

}

export default StoreProcedure;
