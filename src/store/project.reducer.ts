import { Action } from "@ngrx/store";
import Project from "src/app/models/Project";
import { ActionTypes, Add, Edit, Delete, Read } from "./project.action";

export const initialState : Project[] = [{
    id: 1,
    name: 'Some name',
    description: 'Some description'
}]

export function projectReducer(state = initialState, action : Action){
    switch(action.type) {
        case ActionTypes.Read:
            return state;

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