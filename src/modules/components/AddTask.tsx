import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { TaskAction } from 'modules/tasks-redux';

import { AppState } from 'modules/redux-store';

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
    <form onSubmit={handleSubmit}>
      <h3>Add tasks</h3>
      <input 
        type='text' 
        required
        value={input}
        onChange={handleInputChange}
      />
      <button type='submit'>Add</button>
    </form>
  )
}