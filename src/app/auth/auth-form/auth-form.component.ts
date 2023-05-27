import { Component } from '@angular/core';

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

  public ngOnInit(): void { }
}
