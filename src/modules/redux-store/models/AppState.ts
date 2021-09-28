import { TaskReducer } from 'modules/tasks-redux';
export interface AppState {
  taskReducer: ReturnType<typeof TaskReducer>;
}
