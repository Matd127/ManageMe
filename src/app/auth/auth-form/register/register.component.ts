import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Register } from 'src/store/userStore/user.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Input() auth:boolean;
  @Output() authEvent = new EventEmitter<boolean>();

  username = '';
  email = '';
  password = '';
  name = ''
  surname = ''
  question: '';
  answer = '';


  setAuth() {
    this.authEvent.emit(this.auth);
  }

  constructor(private store: Store<any>) {}

  registerNewUser() {
    const newUser = {
      id: Date.now(),
      username: this.username,
      email: this.email,
      password: this.password,
      name: this.name,
      surname: this.surname,
      question: this.question,
      answer: this.answer,
      role: 'developer'
    }
    
    this.store.dispatch(new Register(newUser))
  }
}
