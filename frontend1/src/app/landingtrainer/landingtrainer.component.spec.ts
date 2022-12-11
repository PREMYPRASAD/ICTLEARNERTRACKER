import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingtrainerComponent } from './landingtrainer.component';

describe('LandingtrainerComponent', () => {
  let component: LandingtrainerComponent;
  let fixture: ComponentFixture<LandingtrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingtrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
