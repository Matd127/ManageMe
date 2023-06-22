import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import User from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private store: Store<any>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select('user').pipe(
      map((users: User[]) => {
        const storedUser = localStorage.getItem('user');
        if (storedUser && users && users.length === 1) {
          return true;
        } else {
          this.router.navigate(['/auth']);
          return false; 
        }
      })
    );
  }
}
