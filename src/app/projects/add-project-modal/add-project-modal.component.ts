import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Add } from 'src/store/projectStore/project.action';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.scss']
})

export class AddProjectModalComponent {
  closeResult = '';
  name = '';
  description: string = '';
  error = false;
  errorMessage = 'Name and Description cannot be empty.';

  constructor(private store: Store<any>, private modalService: NgbModal) {}

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
