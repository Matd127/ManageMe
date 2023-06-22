import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false; 
    }
  }
}
