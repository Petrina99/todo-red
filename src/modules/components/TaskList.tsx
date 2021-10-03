import React from 'react';

import { useDispatch, useSelector } from 'react-redux'; 

import { AppState } from 'modules/redux-store';
import { TaskAction } from 'modules/tasks-redux';

import style from './styles/taskList.module.css';

import thrash from 'images/thrash.svg';

export const TaskList: React.FC = () => {
  const { tasks } = useSelector((state:AppState) => state.taskReducer);
  const dispatch = useDispatch();

  const onEdit = (e: React.FocusEvent<HTMLParagraphElement>) => {
    const { id } = e.currentTarget.dataset;
    const { textContent } = e.currentTarget;

    if (!id || !textContent || !Boolean(textContent)) {
      return;
    }

    dispatch(
      TaskAction.edit({ content: textContent, id: parseInt(id), finished: false }),
      );
  }

  const onRemove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { id } = e.currentTarget.dataset;

    if (id) {
      dispatch(TaskAction.remove(parseInt(id)));
    }
  }

  if (!tasks.length) {
    return (
    <div className={style.noList}>
      There are currently no tasks.
    </div>
    );
  }

  return (
    <div className={style.listDiv}>
      {tasks
        .sort((a,b) => a.id - b.id)
        .map((task) => (
          <div key={task.id} className={style.taskDiv}>
            <p>{task.id}.</p>
            <span 
              data-id={task.id}
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={onEdit}
              className={style.content}
            >
              {task.content}
            </span>
            <img 
              src={thrash}
              onClick={onRemove}
              data-id={task.id}
              alt='thrash-icon'
              className={style.img}
            />
          </div>
        ))}
    </div>
  )
}