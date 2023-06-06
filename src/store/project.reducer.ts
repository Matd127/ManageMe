import { Action } from "@ngrx/store";
import { ActionTypes, Add, Edit, Delete } from "./project.action";

export const initialState = [{
    id: 1,
    name: 'Some name',
    description: 'Some description'
}]

export function projectReducer(state = initialState, action : Action){
    switch(action.type) {
        case ActionTypes.Add:
            const addAction = action as Add;
            return [...state, addAction.payload];

        case ActionTypes.Edit:
            const editAction = action as Edit;
           
            return state;
        case ActionTypes.Delete:
            const deleteAction = action as Delete;

            return state;
        default: 
            return state;
    }
}