import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {usersReducer} from '../reducers/users';
import {sessionReducer} from '../reducers/session';

export const rootReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
