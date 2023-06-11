import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './task.reducer';

@NgModule({
  imports: [StoreModule.forFeature('task', taskReducer)],
})
export class TaskModule {}
