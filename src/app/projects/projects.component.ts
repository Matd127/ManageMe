import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { dummyProjects } from './dummyProjects';
import { Store } from '@ngrx/store';
import { Read } from 'src/store/project.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public width = window.innerWidth;
  public showSidebar = window.innerWidth > 992 ? true : false;
  public dummyProjectsList = dummyProjects
  public projects: Observable<any[]>
 
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.width = window.innerWidth
    this.store.dispatch(new Read())
    this.store.select(state => state.projects).subscribe(projects => {
      console.log(projects)
    })
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
