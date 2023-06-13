import { Action } from '@ngrx/store';
import { ActionTypes, TaskAdd, TaskEdit, TaskDelete } from './task.action';
import { Task } from 'src/models/Task';

const dataFromLocalStorage = localStorage.getItem('tasks');
const existingData = dataFromLocalStorage && JSON.parse(dataFromLocalStorage);
const tasks: Task[] = existingData ?? [];

// export const initialState: Task[] = [
//   {
//     id: 1,
//     name: 'First task',
//     description: 'About first task',
//     priority: 'Low',
//     functionality: {
//       id: 1,
//       name: 'First functionality',
//       description: 'Functionality Description',
//       priority: 'Low',
//       project: {
//         id: 1,
//         name: 'Some name',
//         description: 'Some description',
//       },
//       owner: {
//         id: 2,
//         username: 'devopsuser',
//         email: 'devops@example.com',
//         password: 'devops123',
//         name: 'DevOps',
//         surname: 'User',
//         question: 'What is your favorite animal?',
//         answer: 'Dog',
//         role: 'devops',
//       },
//       state: 'Todo',
//     },
//     predictedTime: new Date('19.01.2025'),
//     state: 'Todo',
//     createDate: new Date('11.06.2023'),
//     startDate: new Date('11.06.2023'),
//     responsibleUser: [admin, devops, developer],
//   },
//   {
//     id: 2,
//     name: 'AA task',
//     description: 'About first task',
//     priority: 'Low',
//     functionality: {
//       id: 2,
//       name: 'Second functionality',
//       description: 'Functionality Description',
//       priority: 'Low',
//       project: {
//         id: 1,
//         name: 'Some name',
//         description: 'Some description',
//       },
//       owner: {
//         id: 2,
//         username: 'devopsuser',
//         email: 'devops@example.com',
//         password: 'devops123',
//         name: 'DevOps',
//         surname: 'User',
//         question: 'What is your favorite animal?',
//         answer: 'Dog',
//         role: 'devops',
//       },
//       state: 'Todo',
//     },
//     predictedTime: new Date('19.01.2025'),
//     state: 'Todo',
//     createDate: new Date('11.06.2023'),
//     startDate: new Date('11.06.2023'),
//     responsibleUser: [admin, devops, developer],
//   },
// ];

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
      return state.filter((task) => task.id !== deleteAction.payload.id);

    case ActionTypes.TaskRead:
      return state;

    default:
      return state;
  }
}
