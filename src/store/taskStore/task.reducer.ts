import { Action } from '@ngrx/store';
import { ActionTypes, TaskAdd, TaskEdit, TaskDelete } from './task.action';
import { Task } from 'src/models/Task';

const dataFromLocalStorage = localStorage.getItem('tasks');
const existingData = dataFromLocalStorage && JSON.parse(dataFromLocalStorage);
const tasks: Task[] = existingData ?? [];

export function taskReducer(state = tasks, action: Action) {
  switch (action.type) {
    case ActionTypes.TaskAdd:
      const addAction = action as TaskAdd;
      const addedTasks = [...state, addAction.payload];
      localStorage.setItem('tasks', JSON.stringify(addedTasks));
      return [...state, addAction.payload];

    case ActionTypes.TaskEdit:
      const editAction = action as TaskEdit;
      const foundTask = state.filter(
        (task) => task.id === editAction.payload.id
      );
      if (foundTask.length != 1) return state;

      return state;

    case ActionTypes.TaskDelete:
      const deleteAction = action as TaskDelete;
      const updatedTasks = state.filter((task) => task.id !== deleteAction.payload.id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;

    case ActionTypes.TaskRead:
      return state;

    default:
      return state;
  }
}