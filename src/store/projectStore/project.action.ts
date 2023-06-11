import { Action } from "@ngrx/store";

export enum ActionTypes {
    Add  = 'Add',
    Edit = 'Edit',
    Delete = 'Delete',
    Read = 'Read'
}

export class Add implements Action {
    readonly type = ActionTypes.Add;
     
    constructor(public payload: {id: number, name: string, description: string}) {}
}

export class Edit implements Action {
    readonly type = ActionTypes.Edit

    constructor(public payload: {id: number, name?: string, description?: string}) {}
}

export class Delete implements Action {
    readonly type = ActionTypes.Delete

    constructor(public payload: {id: number}) {}
}

export class Read implements Action {
    readonly type = ActionTypes.Read
}
