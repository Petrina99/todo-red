import React from 'react';

import { AddTask, TaskList } from 'modules/components';

import style from './styles/taskView.module.css';

export const TaskView: React.FC = () => {
  return (
    <div className={style.taskViewDiv}>
      <AddTask />
      <TaskList />
      <footer className={style.footer}>
        <p>Created by</p>
        <p>Mislav Petrina © 2021.</p>
      </footer>
    </div>
  );
};
