import { Action } from '@ngrx/store';
import { ActionTypes, TaskAdd, TaskEdit, TaskDelete } from './task.action';
import  Task  from 'src/models/Task';

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
        const newTask = state.map((task) => {
          if (task.id === editAction.payload.id) {
            // Only update the properties that need to be changed
            return {
              ...task,
              name: editAction.payload.name,
              description: editAction.payload.description,
              priority: editAction.payload.priority,
              predictedTime: editAction.payload.predictedTime,
              state: editAction.payload.state,
              startDate: editAction.payload.startDate,
              finishDate: editAction.payload.finishDate,
            };
          }
          return task;
        });
  
        localStorage.setItem('tasks', JSON.stringify(newTask));
        return newTask;

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