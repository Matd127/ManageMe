import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Functionality from 'src/models/Functionality';
import { FunctionalityEdit } from 'src/store/functionalityStore/functionality.action';

@Component({
  selector: 'app-edit-functionality-modal',
  templateUrl: './edit-functionality-modal.component.html',
  styleUrls: ['./edit-functionality-modal.component.scss']
})
export class EditFunctionalityModalComponent {
  @Input() public functionality: any;

  priority: 'Low' | 'Normal' | 'High';
  closeResult = '';
  name = '';
  description: string = '';
  error = false;

  errorMessage = 'Name and Description cannot be empty.';

  constructor(private store: Store<any>, private modalService: NgbModal) {}

  editFunctionality(): void {
    
    const editedFunctionality : Functionality = {
      id: this.functionality.id,
      name: this.name,
      description: this.description,
      priority: this.priority,
      project: this.functionality.project,
      owner: this.functionality.owner,
      state: this.functionality.state
    }

    this.store.dispatch(new FunctionalityEdit(editedFunctionality))
    console.log(editedFunctionality)
    this.modalService.dismissAll();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
    this.priority = this.functionality.priority;
    this.name = this.functionality.name;
    this.description = this.functionality.description
  }
}
