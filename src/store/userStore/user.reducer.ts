import { NgModule } from '@angular/core';
import { Action, StoreModule } from '@ngrx/store';
import { admin, developer, devops } from './dummyUsers';
import { ActionTypes, Login } from './user.action';
import User from 'src/models/User';

const dataFromLocalStorage = localStorage.getItem('users');
const existingData = dataFromLocalStorage && JSON.parse(dataFromLocalStorage);

let users: User[];
if(!existingData) {
  users = [admin, devops, developer];
  localStorage.setItem('users', JSON.stringify('users'))
}

export function userReducer(state = users, action: Action) {
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
