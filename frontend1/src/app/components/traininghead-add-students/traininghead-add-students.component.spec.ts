import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingheadAddStudentsComponent } from './traininghead-add-students.component';

describe('TrainingheadAddStudentsComponent', () => {
  let component: TrainingheadAddStudentsComponent;
  let fixture: ComponentFixture<TrainingheadAddStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingheadAddStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingheadAddStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
