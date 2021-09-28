import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from '../models';

import { TaskReducer } from 'modules/tasks-redux';

export const configureStore = () => {
  return createStore(
    combineReducers<AppState>({
      taskReducer: TaskReducer,
    }),
    {},
    composeWithDevTools(),
  );
};
