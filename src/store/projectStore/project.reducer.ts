import { Action } from '@ngrx/store';
import { ActionTypes, Add, Edit, Delete } from './project.action';
import Project from 'src/models/Project';

export const initialState : Project[] = [
  {
    id: 1,
    name: 'Some name',
    description: 'Some description',
  },
  {
    id: 2,
    name: 'Test project',
    description: 'Testing project',
  },
];

export function projectReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Add:
      const addAction = action as Add;
      return [...state, addAction.payload];

    case ActionTypes.Edit:
      const editAction = action as Edit;
      const foundProject = state.filter(project => project.id === editAction.payload.id)

      if(foundProject.length != 1)
        return state;
      
      
      return state;

    case ActionTypes.Delete:
      const deleteAction = action as Delete;
      return state.filter(project => project.id !== deleteAction.payload.id);

    case ActionTypes.Read:
      return state;

    default:
      return state;
  }
}
