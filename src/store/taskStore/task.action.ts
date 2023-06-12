import { Action } from "@ngrx/store";

export enum ActionTypes {
    TaskAdd  = '[Task] Add',
    TaskEdit = '[Task] Edit',
    TaskDelete = '[Task] Delete',
    TaskRead = '[Task] Read'
}

export class TaskAdd implements Action {
    readonly type = ActionTypes.TaskAdd;
     
    constructor(public payload: {id: number, name: string, description: string}) {}
}

export class TaskEdit implements Action {
    readonly type = ActionTypes.TaskEdit

    constructor(public payload: {id: number, name?: string, description?: string}) {}
}

export class TaskDelete implements Action {
    readonly type = ActionTypes.TaskDelete

    constructor(public payload: {id: number}) {}
}

export class TaskRead implements Action {
    readonly type = ActionTypes.TaskRead
}
