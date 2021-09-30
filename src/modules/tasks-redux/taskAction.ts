import { createAction } from 'modules/redux-store';
import { TaskModel } from './TaskModel';

export const TaskAction = {
  add: (item: TaskModel) => createAction('task/add', item),
  edit: (item: TaskModel) => createAction('task/edit', item),
  remove: (id: number) => createAction('task/remove', { id }),
  reset: () => createAction('task/reset'),
};
