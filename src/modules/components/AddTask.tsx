import React from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { TaskAction } from 'modules/tasks-redux';

import { AppState } from 'modules/redux-store';

type FormValues = {
  input: string;
}

export const AddTask: React.FC = () => {

  const { tasks } = useSelector((state:AppState) => state.taskReducer);
  const dispatch = useDispatch();
  
  const id = tasks.length 
    ? tasks.sort((a,b) => a.id - b.id)[tasks.length - 1].id + 1 
    : 1;

  const { 
    register, 
    handleSubmit,
    formState: { errors },
   } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    dispatch(
      TaskAction.add({ content: data.input, id: id, finished: false }),
      );
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Add tasks</h3>
      <input 
        type='text' 
        {...register('input', {
          required: 'This field is required.',
        })}
      />
       {errors.input && (
          <p>{errors.input.message}</p>
        )}
      <button type='submit' />
    </form>
  )
}