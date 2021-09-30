import React from 'react';

import { AddTask, TaskList } from 'modules/components';
export const TaskView: React.FC = () => {
  return (
    <div>
      <AddTask />
      <TaskList />
    </div>
  );
};
