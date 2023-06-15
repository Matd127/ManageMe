import { NgModule } from '@angular/core';
import { Action, StoreModule } from '@ngrx/store';
import { admin, developer, devops } from './dummyUsers';
import { ActionTypes, Login, Register } from './user.action';
import User from 'src/models/User';

const dataFromLocalStorage = localStorage.getItem('users');
const existingData = dataFromLocalStorage && JSON.parse(dataFromLocalStorage);

let users: User[];
if (!existingData) {
  users = [admin, devops, developer];
  console.log(users)
  localStorage.setItem('users', JSON.stringify(users));
} else {
  users = existingData; 
}

export function userReducer(state = users, action: Action) {
  switch (action.type) {
    case ActionTypes.Login:
      const loginAction = action as Login;
      const data = loginAction.payload;

      const isUserExist = state.filter(
        (user) => user.username === data.username && user.password === data.password
      );

      if (isUserExist.length === 1) {
        localStorage.setItem('user', JSON.stringify(isUserExist))
        return isUserExist;
      }
      return state;

      case ActionTypes.Register: {
      const registerAction = action as Register;
      const newUser = registerAction.payload;

      const isUsernameTaken = state.some(user => user.username === newUser.username);

      if (isUsernameTaken) {
        console.log('Username already taken');
        return state;
      }
      
      const updatedState = [...state, newUser];
      localStorage.setItem('users', JSON.stringify(updatedState));
      console.log(updatedState)
      return updatedState;
      }

    case ActionTypes.DisplayAccounts:
      return state;
  }

}
