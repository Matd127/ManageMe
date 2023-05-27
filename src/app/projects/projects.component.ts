import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  protected dummyProjects = [
    {
      id: 1,
      title: 'Some project',
      description: 'Some description about this project. Click to see more!'
    },
    {
      id: 2,
      title: 'Second project',
      description: 'Some description about second project. Click to see more!'
    },
    {
      id: 3,
      title: 'Third project',
      description: 'Some description about third project. Click to see more!'
    },
  ];

  removeProject(id : number) {
    this.dummyProjects = this.dummyProjects.filter(projects => projects.id !== id)
    console.log(this.dummyProjects.length)
  }
}
