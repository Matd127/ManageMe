import { Component, Output,  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Edit } from 'src/store/projectStore/project.action';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.scss']
})
export class EditProjectModalComponent {
  @Input() public project :any;

  closeResult = '';
  name = '';
  description: string = '';
  error = false;

  errorMessage = 'Name and Description cannot be empty.';

  constructor(private store: Store<any>, private modalService: NgbModal) {}

  editProject(): void {
    if (this.name.trim().length === 0 || this.description.trim().length === 0) {
      this.error = true;
      return;
    }
    const newProject = {
      id: this.project.id,
      name: this.name,
      description: this.description,
    };
    this.store.dispatch(new Edit(newProject));
    this.modalService.dismissAll();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
    console.log(this.project.id)
    this.name = this.project.name
    this.description = this.project.description
  }
}
