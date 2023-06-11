import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})

export class AuthFormComponent {
  public isAuth: boolean = true; 

  switchLoginAndRegister() {
    this.isAuth = !this.isAuth;
  }

  constructor( private router: Router) {}

  public ngOnInit(): void {
    const checkIfLogged = localStorage.getItem('user');

    if(checkIfLogged) {
      this.router.navigate(['/projects']);
    }
  }
}
