import { Action } from '@ngrx/store';
import { ActionTypes, Add, Edit, Delete } from './project.action';
import Project from 'src/models/Project';

const dataFromLocalStorage = localStorage.getItem('projects')
const existingData = dataFromLocalStorage && JSON.parse(dataFromLocalStorage) 
const projects : Project[] = existingData ?? []

export function projectReducer(state = projects, action: Action) {
  switch (action.type) {
    case ActionTypes.Add:
      const addAction = action as Add;
      const addedProject = [...state, addAction.payload];
      localStorage.setItem('projects', JSON.stringify(addedProject))
      return [...state, addAction.payload];

    case ActionTypes.Edit:
      const editAction = action as Edit;
      const foundProjectIndex = state.findIndex(project => project.id === editAction.payload.id);
      
      if (foundProjectIndex !== -1) {
        if(editAction.payload.description.trim().length === 0 || editAction.payload.name.trim().length === 0) return state;

        const foundProject = state[foundProjectIndex];
        const updatedProject = {
          ...foundProject,
          name: editAction.payload.name,
          description: editAction.payload.description
        };
        const newState = [...state];
        newState[foundProjectIndex] = updatedProject;
        localStorage.setItem('projects', JSON.stringify(newState))
        return newState;
      }

      return state

    case ActionTypes.Delete:
      const deleteAction = action as Delete;
      const projectsAfterDelete = state.filter(project => project.id !== deleteAction.payload.id)
      localStorage.setItem('projects', JSON.stringify(projectsAfterDelete))
      return state.filter(project => project.id !== deleteAction.payload.id);

    case ActionTypes.Read:
      return state;

    default:
      return state;
  }
}
