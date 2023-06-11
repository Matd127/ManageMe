import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import Project from 'src/models/Project';
import { Read } from 'src/store/projectStore/project.action';
import { map } from 'rxjs/operators';
import { FunctionalityDelete, FunctionalityRead} from 'src/store/functionalityStore/functionality.action';
import { TaskDelete, TaskRead } from 'src/store/taskStore/task.action';
import Functionality from 'src/models/Functionality';
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
  tasks: Observable<any>;

  constructor(private route: ActivatedRoute, private store: Store<any>, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

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
    this.tasks = this.store.select('task');

    this.tasks.subscribe((taskList) => {
      console.log(taskList[0].functionality.id);
      console.log(+(this.id ?? -1));
    });
  }

  addFunctionality() {}

  deleteFunctionaLity(id: number) {
    this.store.dispatch(new FunctionalityDelete({ id }));
  }

  addTask() {}

  getTaskById(id: number) {
    return (this.tasks = this.store
      .select('task')
      .pipe(
        map((tasks) =>
          tasks.filter((task: any) => task.functionality.id === id)
        )
      ));
  }

  deleteTask(id: number) {
    this.store.dispatch(new TaskDelete({ id }));
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }
}
