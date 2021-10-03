import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { TaskAction } from 'modules/tasks-redux';

import { AppState } from 'modules/redux-store';

import style from './styles/addTask.module.css';

export const AddTask: React.FC = () => {

  const [input, setInput] = useState('');
  const { tasks } = useSelector((state:AppState) => state.taskReducer);
  const dispatch = useDispatch();

  const id = tasks.length 
    ? tasks.sort((a,b) => a.id - b.id)[tasks.length - 1].id + 1 
    : 1;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setInput(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      TaskAction.add({ content: input, id: id, finished: false }),
      );
    setInput('');
  }

  return(
    <form onSubmit={handleSubmit} className={style.addTaskForm}>
      <h3>Add tasks</h3>
      <div className={style.inputDiv}>
        <input 
          type='text' 
          required
          value={input}
          onChange={handleInputChange}
          placeholder='Write your tasks here'
          maxLength={40}
        />
        <button type='submit' className={style.btn}>Add</button>
      </div>
    </form>
  )
}