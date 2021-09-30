import { createAction } from 'modules/redux-store';
import { TaskModel } from './TaskModel';

export const TaskAction = {
  add: (item: TaskModel) => createAction('task/add', item),
  finished: (id: number) => createAction('task/finished', { id }), 
  edit: (item: TaskModel) => createAction('task/edit', item),
  remove: (id: number) => createAction('task/remove', { id }),
  reset: () => createAction('task/reset'),
};
