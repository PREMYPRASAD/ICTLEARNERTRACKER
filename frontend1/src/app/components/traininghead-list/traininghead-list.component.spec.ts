import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingheadListComponent } from './traininghead-list.component';

describe('TrainingheadListComponent', () => {
  let component: TrainingheadListComponent;
  let fixture: ComponentFixture<TrainingheadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingheadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingheadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
