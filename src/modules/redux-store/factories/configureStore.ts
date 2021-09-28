import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from '../models';

export const configureStore = () => {
  return createStore(
    combineReducers<AppState>({
      taskReducer: TaskReducer,
    }),
    {},
    composeWithDevTools(),
  );
};
