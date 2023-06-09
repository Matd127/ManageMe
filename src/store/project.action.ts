import { Action } from "@ngrx/store";

export enum ActionTypes {
    Add  = '[Project Component] Add',
    Edit = '[Project Component] Edit',
    Delete = '[Project Component] Delete',
    Read = '[Project Component] Read'
}

export class Add implements Action {
    readonly type = ActionTypes.Add;
     
    constructor(public payload: {id: number, name: string, desription: string}) {}
}

export class Edit implements Action {
    readonly type = ActionTypes.Edit;

    constructor(public payload: {id: number}) {}
}

export class Delete implements Action {
    readonly type = ActionTypes.Delete

    constructor(public payload: {id: number}) {}
}

export class Read implements Action {
    readonly type = ActionTypes.Read;
}

