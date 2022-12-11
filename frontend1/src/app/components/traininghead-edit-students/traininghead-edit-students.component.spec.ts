import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingheadEditStudentsComponent } from './traininghead-edit-students.component';

describe('TrainingheadEditStudentsComponent', () => {
  let component: TrainingheadEditStudentsComponent;
  let fixture: ComponentFixture<TrainingheadEditStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingheadEditStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingheadEditStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
