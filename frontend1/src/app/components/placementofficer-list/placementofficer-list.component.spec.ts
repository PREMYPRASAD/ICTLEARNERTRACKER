import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementofficerListComponent } from './placementofficer-list.component';

describe('PlacementofficerListComponent', () => {
  let component: PlacementofficerListComponent;
  let fixture: ComponentFixture<PlacementofficerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementofficerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementofficerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
