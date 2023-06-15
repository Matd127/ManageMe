import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Functionality from 'src/models/Functionality';
import { Store } from '@ngrx/store';
import Task from 'src/models/Task';
import { admin, devops } from 'src/store/userStore/dummyUsers';
import User from 'src/models/User';
import { FunctionalityChangeState } from 'src/store/functionalityStore/functionality.action';
import { TaskEdit, TaskRead } from 'src/store/taskStore/task.action';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.scss'],
})
export class EditTaskModalComponent {
  @Input() public functionality: any;
  @Input() public task: any;

  name = '';
  description = '';
  priority = '';
  predictedTime = 0;
  state = 'Todo';
  startDate: Date | undefined;
  finishDate: Date | undefined;
  createDate: Date;
  taskArr: Task[] = []

  errorMessages = {
    errPrimaryInfo: '',
    errDate: '',
    errNoOfHours: '',
    errDoing: '',
    errDone: ''
  };

  error = false;
  constructor(private store: Store<any>, private modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }

  editTask() {
    if (this.startDate && this.finishDate && this.startDate > this.finishDate) {
      this.error = true;
      this.errorMessages.errDate = 'You cannot finish task before start';
      return;
    } else {
      this.errorMessages.errDate = '';
    }

    if (this.name.trim().length === 0 || this.description.trim().length === 0) {
      this.error = true;
      this.errorMessages.errPrimaryInfo = 'Name and description cannot be empty';
      return;
    } else {
      this.errorMessages.errPrimaryInfo = '';
    }

    if (!this.predictedTime) {
      this.error = true;
      this.errorMessages.errNoOfHours = 'Number of hours cannot be empty';
      return;
    } else {
      this.errorMessages.errNoOfHours = '';
    }

    this.error = false;

    const updatedTask : Task = {
      id: this.task.id,
      name: this.name,
      description: this.description,
      priority: this.priority as 'Low' | 'Normal' | 'High',
      functionality: this.task.functionality,
      predictedTime: this.predictedTime,
      state: this.state as 'Todo' | 'Doing' | 'Done',
      createDate: this.task.createDate,
      startDate: this.startDate,
      finishDate: this.finishDate,
      responsibleUser: this.task.responsibleUser
    }
    
    this.store.dispatch(new TaskRead())
    this.store.select('task').subscribe((tasks: Task[]) => {
      this.taskArr = tasks;
    });

    this.store.dispatch(new TaskEdit({
      id: this.task.id,
      name: this.name,
      description: this.description,
      priority: this.priority as 'Low' | 'Normal' | 'High',
      predictedTime: this.predictedTime,
      state: this.state as 'Todo' | 'Doing' | 'Done',
      startDate: this.startDate,
      finishDate: this.finishDate,
    }))

    const states = this.taskArr.filter(task => task.functionality.id === updatedTask.functionality.id);
    
    if(states.every(task => task.state === 'Done')) {
      this.store.dispatch(new FunctionalityChangeState({id: updatedTask.functionality.id, newState: 'Done'}))
    } else {
      this.store.dispatch(new FunctionalityChangeState({id: updatedTask.functionality.id, newState: 'Doing'}))
    }
  }

  ngOnInit(): void {
    this.name = this.task.name;
    this.description = this.task.description;
    this.predictedTime = this.task.predictedTime;
    this.priority = this.task.priority;
    this.state = this.task.state;
    this.startDate = this.task.startDate ? new Date(this.task.startDate) : undefined;
    this.finishDate = this.task.finishDate ? new Date(this.task.finishDate) : undefined;
  }
}