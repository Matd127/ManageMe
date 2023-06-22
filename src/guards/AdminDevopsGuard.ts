import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import User from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class AdminDevopsGuard implements CanActivate {

  constructor() {}

  canActivate(): boolean {
      const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user: User[] = JSON.parse(storedUser);
      if (user[0].role === 'admin' || user[0].role === 'devops') {
        return true;
      }
    }
    return false; 
  }
}
