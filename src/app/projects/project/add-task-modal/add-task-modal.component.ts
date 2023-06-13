import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Functionality from 'src/models/Functionality';
import { Store } from '@ngrx/store';
import { Task } from 'src/models/Task';
import { admin, devops } from 'src/store/userStore/dummyUsers';
import { TaskAdd } from 'src/store/taskStore/task.action';
import User from 'src/models/User';
import { FunctionalityChangeState } from 'src/store/functionalityStore/functionality.action';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent {
  @Input() public functionality: any;
  userFromLocalStorage = localStorage.getItem('user')
  user = JSON.parse(this.userFromLocalStorage ?? '') || {}
  error = false;
  errorMessage = ''

  name = '';
  description = '';
  priority = 'Low';
  predictedTime = 0;
  state = 'Todo';
  createDate : Date;

  constructor( private store: Store<any>, private modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }

  onSelect(value: string) : void {
    this.priority = value;
  }

  addTask() {
    let usersArr: User[];
    console.log(this.priority)
    this.createDate = new Date(Date.now());

    if(this.user[0].role === 'admin' || this.user[0].role === 'devops'){
      usersArr = [admin, devops]
    } else {
      usersArr = [this.user[0], admin, devops]
    }

    const newTask : Task = {
      id: Date.now(),
      name: this.name,
      description: this.description,
      priority: this.priority as "Low" | "Normal" | "High",
      predictedTime: this.predictedTime,
      state: 'Todo',
      createDate: this.createDate,
      responsibleUser: usersArr,
      functionality: this.functionality
    }

    if(this.name.trim().length <= 0 || this.description.trim().length <= 0){
      this.error = true;
      this.errorMessage = 'Incorrect name or description'
      return;
    } else {
      this.error = false;
    }

    this.store.dispatch(new TaskAdd(newTask))
    
    if(this.functionality.state === 'Todo') {
      this.store.dispatch(new FunctionalityChangeState({id: this.functionality.id, newState: 'Doing'}))
    }
  }
}