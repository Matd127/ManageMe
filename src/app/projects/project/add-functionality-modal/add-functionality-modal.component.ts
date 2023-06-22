import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Functionality from 'src/models/Functionality';
import { Store } from '@ngrx/store';
import { FunctionalityAdd } from 'src/store/functionalityStore/functionality.action';

@Component({
  selector: 'app-add-functionality-modal',
  templateUrl: './add-functionality-modal.component.html',
  styleUrls: ['./add-functionality-modal.component.scss'],
})
export class AddFunctionalityModalComponent {
  
  userFromLocalStorage = localStorage.getItem('user')
  projectFromLocalStorage = localStorage.getItem('currentProject')
  
  name = '';
  description = '';
  priority = '';
  state = 'Todo';
  error = false;
  errorMessage = ''

  constructor( private store: Store<any>, private modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }

  onSelect(value: string) : void {
    this.priority = value;
  }

  addFunctionality() {

    let user, project;

    if(this.name === '' || this.description === '' ) {
      this.error = true;
      this.errorMessage = 'Name and description cannot be empty';
      return;
    } 
    if(!this.userFromLocalStorage || !this.projectFromLocalStorage) return;

    if(this.userFromLocalStorage) user = JSON.parse(this.userFromLocalStorage);
    if(this.projectFromLocalStorage) project = JSON.parse(this.projectFromLocalStorage);

    const newFunctionality : Functionality = {
      id: Date.now(),
      name: this.name,
      description: this.description,
      priority: this.priority as 'Low' | 'Normal' | 'High' ,
      project,
      owner: user,
      state: 'Todo'
    }

    this.store.dispatch(new FunctionalityAdd(newFunctionality))
    console.log(newFunctionality)
    this.modalService.dismissAll();
  }
} 
