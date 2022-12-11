import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstudentsComponent } from './editstudents.component';

describe('EditstudentsComponent', () => {
  let component: EditstudentsComponent;
  let fixture: ComponentFixture<EditstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
