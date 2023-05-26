import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Input() auth = true;
  @Output() switchToRegister = new EventEmitter()
  
  onSwitchToRegister(e: any) {
    e.preventDefault();
    this.auth = !this.auth;
    console.log(this.auth)
  }
  
  ngOnInit(): void {}
}
