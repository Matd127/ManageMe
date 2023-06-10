import { Component } from '@angular/core';
import { HostListener } from '@angular/core';



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

   
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.width = window.innerWidth;
  }

  setShowSidebar() {
    this.showSidebar = !this.showSidebar;
  }


}