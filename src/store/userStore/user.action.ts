import { Action } from '@ngrx/store';


export enum ActionTypes {
  Login = 'Login',
  Register = 'Register',
  DisplayAccounts = 'DisplayAccounts',
  EditAccount = 'EditAccount',
  DeleteAccount = 'DeleteAccount',
}

export class Login implements Action {
  readonly type = ActionTypes.Login;

  constructor(public payload: { username: string, password: string }) {}
}

export class Register implements Action {
  readonly type = ActionTypes.Register;

  constructor(
    public payload: {
      username: string;
      email: string;
      password: string;
      name: string;
      surname: string;
      question: string;
      answer: string;
    }
  ) {}
}

export class DisplayAccounts {
  readonly type = ActionTypes.DisplayAccounts;
}

export class EditAccount {
  readonly type = ActionTypes.EditAccount;

  constructor(public payload: { id: number }) {}
}

export class DeleteAccount {
  readonly type = ActionTypes.DeleteAccount;

  constructor(public payload: { id: number }) {}
}
