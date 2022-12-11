import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementofficerEditStudentsComponent } from './placementofficer-edit-students.component';

describe('PlacementofficerEditStudentsComponent', () => {
  let component: PlacementofficerEditStudentsComponent;
  let fixture: ComponentFixture<PlacementofficerEditStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementofficerEditStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementofficerEditStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
