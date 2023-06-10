import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Add, Read } from 'src/store/project.action';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  closeResult = '';
  name = '';
  description: string = '';
  error = false;
  errorMessage = 'Name and Description cannot be empty.';

  projects: Observable<any[]>;
  constructor(private store: Store<any>, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.store.dispatch(new Read());
    this.projects = this.store.select('project');
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
    .result.then(() => {
      this.reset();
    }, () => {
      this.reset();
    });
  }

  reset() {
    this.name = '';
    this.description = '';
    this.error = false;
  }

  addProject(): void {
    if (this.name.trim().length === 0 || this.description.trim().length === 0) {
      this.error = true;
      return;
    }
    const newProject = {
      id: Date.now(),
      name: this.name,
      description: this.description,
    };
    this.store.dispatch(new Add(newProject));
    this.modalService.dismissAll();
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
