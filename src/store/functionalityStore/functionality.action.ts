import { Action } from "@ngrx/store";

export enum ActionTypes {
    FunctionalityAdd = '[Functionality] Add',
    FunctionalityEdit = '[Functionality] Edit',
    FunctionalityDelete = '[Functionality] Delete',
    FunctionalityRead = '[Functionality] Read',
    FunctionalityChangeState = '[Functionality] ChangeState'
}

export class FunctionalityAdd implements Action {
    readonly type = ActionTypes.FunctionalityAdd;
     
    constructor(public payload: {id: number, name: string, description: string}) {}
}

export class FunctionalityEdit implements Action {
    readonly type = ActionTypes.FunctionalityEdit

    constructor(public payload: {id: number, name: string, description: string, priority: 'Low' | 'Normal' | 'High'}) {}
}


export class FunctionalityDelete implements Action {
    readonly type = ActionTypes.FunctionalityDelete

    constructor(public payload: {id: number}) {}
}

export class FunctionalityRead implements Action {
    readonly type = ActionTypes.FunctionalityRead
}

export class FunctionalityChangeState implements Action {
    readonly type = ActionTypes.FunctionalityChangeState

    constructor(public payload: {id: number, newState: 'Todo' | 'Doing' | 'Done' }) {}
} 