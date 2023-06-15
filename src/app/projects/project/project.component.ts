import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import Project from 'src/models/Project';
import { Read } from 'src/store/projectStore/project.action';
import { map } from 'rxjs/operators';
import {
  FunctionalityDelete,
  FunctionalityRead,
} from 'src/store/functionalityStore/functionality.action';
import { TaskDelete, TaskRead } from 'src/store/taskStore/task.action';
import Functionality from 'src/models/Functionality';
import Task  from 'src/models/Task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  public id: string | null;
  project: Observable<Project | undefined>;
  functionalities: Observable<any>;
  loggedUser: any;
  isAdminOrDevops = false;
  tasks: any[] = [];

  selectedFunctionality = {};
  selectedTask = {}

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    const getUserFromLocalStorage = localStorage.getItem('user');
    this.loggedUser =
      getUserFromLocalStorage && JSON.parse(getUserFromLocalStorage);
    if (
      this.loggedUser[0].role === 'admin' ||
      this.loggedUser[0].role === 'devops'
    ) {
      this.isAdminOrDevops = !this.isAdminOrDevops;
    }

    this.store.dispatch(new Read());
    this.project = this.store
      .select('project')
      .pipe(
        map(
          (projects) =>
            projects.find(
              (project: Project) => project.id === +(this.id ?? -1)
            ) ?? undefined
        )
      );

    this.store.dispatch(new FunctionalityRead());
    this.functionalities = this.store
      .select('functionality')
      .pipe(
        map((functionalities) =>
          functionalities.filter(
            (func: Functionality) => func.project.id === +(this.id ?? -1)
          )
        )
      );

    this.store.dispatch(new TaskRead());
    this.store.select('task').subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteFunctionaLity(id: number) {
    this.store.dispatch(new FunctionalityDelete({ id }));
  }

  getTaskById(id: number) {
    if (this.tasks.length > 0) {
      const functionalityTasks = this.tasks.filter(
        (task: any) => task.functionality && task.functionality.id === id
      );
      return functionalityTasks;
    }
    return [];
  }

  deleteTask(id: number) {
    this.store.dispatch(new TaskDelete({ id }));
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  openTask(content: any, functionality: Functionality) {
    this.selectedFunctionality = functionality;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  editTask(content : any, functionality: Functionality, task: Task) {
    this.selectedFunctionality = functionality;
    this.selectedTask = task;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  editOpen(content: any, functionality: Functionality) {
    this.selectedFunctionality = functionality;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}