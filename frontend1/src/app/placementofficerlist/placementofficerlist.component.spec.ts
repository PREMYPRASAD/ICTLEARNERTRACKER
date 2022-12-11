import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementofficerlistComponent } from './placementofficerlist.component';

describe('PlacementofficerlistComponent', () => {
  let component: PlacementofficerlistComponent;
  let fixture: ComponentFixture<PlacementofficerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementofficerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementofficerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
