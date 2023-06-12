import { Action } from "@ngrx/store";

export enum ActionTypes {
    FunctionalityAdd = '[Functionality] Add',
    FunctionalityEdit = '[Functionality] Edit',
    FunctionalityDelete = '[Functionality] Delete',
    FunctionalityRead = '[Functionality] Read',
}

export class FunctionalityAdd implements Action {
    readonly type = ActionTypes.FunctionalityAdd;
     
    constructor(public payload: {id: number, name: string, description: string}) {}
}

export class FunctionalityEdit implements Action {
    readonly type = ActionTypes.FunctionalityEdit

    constructor(public payload: {id: number, name: string, description: string}) {}
}

export class FunctionalityDelete implements Action {
    readonly type = ActionTypes.FunctionalityDelete

    constructor(public payload: {id: number}) {}
}

export class FunctionalityRead implements Action {
    readonly type = ActionTypes.FunctionalityRead
}
