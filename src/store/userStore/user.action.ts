import { Action } from '@ngrx/store';

export enum ActionTypes {
  Login = '[User] Login',
  Register = '[User] Register',
  DisplayAccounts = '[User] Display Accounts'
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
