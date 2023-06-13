import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFunctionalityModalComponent } from './edit-functionality-modal.component';

describe('EditFunctionalityModalComponent', () => {
  let component: EditFunctionalityModalComponent;
  let fixture: ComponentFixture<EditFunctionalityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFunctionalityModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFunctionalityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
