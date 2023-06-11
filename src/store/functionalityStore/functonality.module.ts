import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { functionalityReducer } from './functionality.reducer';

@NgModule({
  imports: [StoreModule.forFeature('functionality', functionalityReducer)],
})
export class FunctionalityModule {}
