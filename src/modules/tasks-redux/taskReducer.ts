import { ActionUnion } from 'modules/redux-store';
import { TaskAction } from './taskAction';
import { TaskModel } from './TaskModel';

interface State {
  tasks: TaskModel[];
}

const INITIAL_STATE: State = {
  tasks: [],
};

export const TaskReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof TaskAction>,
) => {
  switch (action.type) {
    case 'task/add':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'task/edit':
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.payload.id),
          action.payload,
        ],
      };
    case 'task/remove':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case 'task/finished':
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.payload.id),
          action.payload,
        ],
      };
    case 'task/reset':
      return INITIAL_STATE;
    default:
      return state;
  }
};
