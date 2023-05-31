import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { dummyProjects } from './dummyProjects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public width = window.innerWidth;
  public showSidebar = window.innerWidth > 992 ? true : false;
  public dummyProjectsList = dummyProjects
 
  ngOnInit(): void {
    this.width = window.innerWidth
  }

  @HostListener('window:resize', ['$event'])
    onWindowResize(){
      this.width = window.innerWidth
    }

  setShowSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  removeProject(id : number) {
    this.dummyProjectsList = this.dummyProjectsList.filter(projects => projects.id !== id)
    console.log(this.dummyProjectsList.length)
  }
}
