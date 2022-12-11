import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementofficerLandingComponent } from './placementofficer-landing.component';

describe('PlacementofficerLandingComponent', () => {
  let component: PlacementofficerLandingComponent;
  let fixture: ComponentFixture<PlacementofficerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementofficerLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementofficerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
