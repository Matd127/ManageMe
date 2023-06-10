import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { projectReducer } from './project.reducer';

@NgModule({
  imports: [StoreModule.forFeature('project', projectReducer)],
})
export class ProjectModule {}
