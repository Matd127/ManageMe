import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Read, Delete } from 'src/store/projectStore/project.action';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Project from 'src/models/Project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  projects: Observable<any[]>;
  isAdminOrDevops = false;
  loggedUser: any;
  selectedProject = {}

  constructor(
    private store: Store<any>,
    private modalService: NgbModal,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new Read());
    this.projects = this.store.select('project');

    const getUserFromLocalStorage = localStorage.getItem('user');
    this.loggedUser =
      getUserFromLocalStorage && JSON.parse(getUserFromLocalStorage);
    if (
      this.loggedUser[0].role === 'admin' ||
      this.loggedUser[0].role === 'devops'
    ) {
      this.isAdminOrDevops = !this.isAdminOrDevops;
    }

    this.projects.subscribe((projects) => {
      console.log('Projects:', projects);
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  editOpen(edit: any, project: Project) {
    this.selectedProject = project;
    this.modalService.open(edit, { ariaLabelledBy: 'modal-basic-title' });
  }

  deleteProject(id: number) {
    console.log(id);
    this.store.dispatch(new Delete({ id }));
  }

  selectProject(project: Project) {
    localStorage.setItem('currentProject', JSON.stringify(project));
    this.router.navigate([`projects/project/${project.id}`]);
  }
}
