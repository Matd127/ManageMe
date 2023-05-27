import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Input() auth:boolean;
  @Output() authEvent = new EventEmitter<boolean>();

  setAuth() {
    this.authEvent.emit(this.auth);
  }
}
