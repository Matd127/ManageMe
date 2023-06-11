import { Action } from '@ngrx/store';
import { ActionTypes, FunctionalityAdd, FunctionalityEdit, FunctionalityDelete } from './functionality.action';
import Functionality from 'src/models/Functionality';

export const initialState : Functionality[] = [
  {
    id: 1,
    name: 'First functionality',
    description: 'Functionality Description',
    priority: 'Low',
    project: {
      id: 1,
      name: 'Some name',
      description: 'Some description',
    },
    owner: {
      id: 2,
      username: 'devopsuser',
      email: 'devops@example.com',
      password: 'devops123',
      name: 'DevOps',
      surname: 'User',
      question: 'What is your favorite animal?',
      answer: 'Dog',
      role: 'devops',
    },
    state: 'Todo',
  },
  {
    id: 2,
    name: 'Second functionality',
    description: 'Functionality Description',
    priority: 'Low',
    project: {
      id: 1,
      name: 'Some name',
      description: 'Some description',
    },
    owner: {
      id: 2,
      username: 'devopsuser',
      email: 'devops@example.com',
      password: 'devops123',
      name: 'DevOps',
      surname: 'User',
      question: 'What is your favorite animal?',
      answer: 'Dog',
      role: 'devops',
    },
    state: 'Todo',
  },
];

export function functionalityReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.FunctionalityAdd:
      const addAction = action as FunctionalityAdd;
      return [...state, addAction.payload];

    case ActionTypes.FunctionalityEdit:
      const editAction = action as FunctionalityEdit;
      const foundFunctionality = state.filter(
        (functionality) => functionality.id === editAction.payload.id
      );
      if (foundFunctionality.length != 1) return state;

      return state;

    case ActionTypes.FunctionalityDelete:
      const deleteAction = action as FunctionalityDelete;
      return state.filter(
        (functionality) => functionality.id !== deleteAction.payload.id
      );

    case ActionTypes.FunctionalityRead:
      return state;

    default:
      return state;
  }
}
