import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingheadLandingComponent } from './traininghead-landing.component';

describe('TrainingheadLandingComponent', () => {
  let component: TrainingheadLandingComponent;
  let fixture: ComponentFixture<TrainingheadLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingheadLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingheadLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
