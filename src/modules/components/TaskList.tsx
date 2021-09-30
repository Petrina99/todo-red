import React from 'react';

import { useDispatch, useSelector } from 'react-redux'; 

import { AppState } from 'modules/redux-store';
import { TaskAction } from 'modules/tasks-redux';

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

  const onRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget.dataset;

    if (id) {
      dispatch(TaskAction.remove(parseInt(id)));
    }
  }

  const onFinished = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id, content } = e.currentTarget.dataset;
    
    if (id && content) {
      dispatch(TaskAction.finished({ content: content, id: parseInt(id), finished: true }));
    }
  }

  return (
    <div>
      <ul>
        {tasks
          .sort((a,b) => a.id - b.id)
          .map((task) => (
            <div key={task.id}>
              <strong>{task.id}</strong>
              <span 
                data-id={task.id}
                contentEditable
                onBlur={onEdit}
              >
                {task.content}
              </span>
              <button 
                type='button'
                onClick={onRemove}
                data-id={task.id}
              >
                &times;
              </button>
              <button
                type='button'
                onClick={onFinished}
                data-id={task.id}
                data-content={task.content}
              >
                <p>Finish</p>
              </button>
            </div>
          ))}
      </ul>
    </div>
  )
}