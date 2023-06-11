import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { DisplayAccounts, Login } from 'src/store/userStore/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  @Input() auth: boolean;
  @Output() authEvent = new EventEmitter<boolean>();

  users: Observable<any[]>;
  constructor(private store: Store<any>, private router: Router) {}

  setAuth() {
    this.authEvent.emit(this.auth);
  }

  ngOnInit(): void {
    this.store.dispatch(new DisplayAccounts());
    this.users = this.store.select('user');

    //Testing store
    this.users.subscribe((projectList) => {
      console.log(projectList);
    });
  }

  login() {
    this.store.dispatch(new Login({username: this.username, password: this.password}))

    this.store.select('user').subscribe((users: any[]) => {
      if (users && users.length === 1) {
        this.router.navigate(['/projects']);
      }
    });
  }
}
