import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Input() auth:boolean;

  @Output() authEvent = new EventEmitter<boolean>();
  
  constructor() {}

  ngOnInit(): void {}

  setAuth() {
    this.authEvent.emit(this.auth);
  }
}
