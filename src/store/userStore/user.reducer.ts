import { NgModule } from '@angular/core';
import { Action, StoreModule } from '@ngrx/store';
import { admin, developer, devops } from './dummyUsers';
import { ActionTypes, Login } from './user.action';


export const initialState = [admin, devops, developer];

export function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Login:
      const loginAction = action as Login;
      const data = loginAction.payload;

      const isUserExist = state.filter(
        (user) => user.username === data.username && user.password === data.password
      );
      console.log(data);

      if (isUserExist.length === 1) {
        localStorage.setItem('user', JSON.stringify(isUserExist))
        return isUserExist;
      }
      return state;

    case ActionTypes.DisplayAccounts:
      return state;
  }
}
