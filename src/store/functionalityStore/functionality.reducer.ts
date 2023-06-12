import { Action } from '@ngrx/store';
import { ActionTypes as FunctionalityActionTypes, FunctionalityAdd, FunctionalityEdit, FunctionalityDelete, FunctionalityRead } from './functionality.action';
import Functionality from 'src/models/Functionality';

const dataFromLocalStorage = localStorage.getItem('functionalities')
const existingData = dataFromLocalStorage && JSON.parse(dataFromLocalStorage) 
const functionalities: Functionality[] = existingData ?? []

export function functionalityReducer(state = functionalities, action: Action) {
  switch (action.type) {
    case FunctionalityActionTypes.FunctionalityAdd:
      const addAction = action as FunctionalityAdd;
      const addedFunctionality = [...state, addAction.payload];
      localStorage.setItem('functionalities', JSON.stringify(addedFunctionality));
      return addedFunctionality;

    case FunctionalityActionTypes.FunctionalityEdit:
      const editAction = action as FunctionalityEdit;
      const foundFunctionalityIndex = state.findIndex(functionality => functionality.id === editAction.payload.id);
      
      if (foundFunctionalityIndex !== -1) {
        if (editAction.payload.description.trim().length === 0 || editAction.payload.name.trim().length === 0) {
          return state;
        }

        const foundFunctionality = state[foundFunctionalityIndex];
        const updatedFunctionality = {
          ...foundFunctionality,
          name: editAction.payload.name,
          description: editAction.payload.description
        };
        const newState = [...state];
        newState[foundFunctionalityIndex] = updatedFunctionality;
        localStorage.setItem('functionalities', JSON.stringify(newState));
        return newState;
      }

      return state;

    case FunctionalityActionTypes.FunctionalityDelete:
      const deleteAction = action as FunctionalityDelete;
      const functionalitiesAfterDelete = state.filter(functionality => functionality.id !== deleteAction.payload.id);
      localStorage.setItem('functionalities', JSON.stringify(functionalitiesAfterDelete));
      return functionalitiesAfterDelete;

    case FunctionalityActionTypes.FunctionalityRead:
      return state;

    default:
      return state;
  }
}
