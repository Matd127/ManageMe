import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-navbar',
  templateUrl: './projects-navbar.component.html',
  styleUrls: ['./projects-navbar.component.scss'],
})
export class ProjectsNavbarComponent  {
  loggedUser : any

  @Input() toggleSidebar : boolean
  @Output() toggleEvent = new EventEmitter<boolean>();

  setToggleSidebar() {
    this.toggleEvent.emit(this.toggleSidebar)
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const getUserFromLocalStorage = localStorage.getItem('user')
    this.loggedUser = getUserFromLocalStorage && JSON.parse(getUserFromLocalStorage)
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['auth']); 
  }
}