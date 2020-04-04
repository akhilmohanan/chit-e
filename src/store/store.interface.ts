import { Action, Middleware, Store } from 'redux';
import { History, LocationState } from 'history';

export interface IStoreProcedure {
    history: History<LocationState>;
    getStore(dataModel: {}): Store;
}
  