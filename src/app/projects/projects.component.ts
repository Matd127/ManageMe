import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public width = window.innerWidth;
  public showSidebar = window.innerWidth > 992 ? true : false;

  ngOnInit(): void {
    this.width = window.innerWidth;
    const checkIfLogged = localStorage.getItem('user');

    if (!checkIfLogged) {
      this.router.navigate(['auth']);
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.width = window.innerWidth;
  }

  setShowSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  constructor(private router: Router) {}
}
