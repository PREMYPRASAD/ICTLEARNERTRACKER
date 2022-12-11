import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingadminComponent } from './ladingadmin.component';

describe('LadingadminComponent', () => {
  let component: LadingadminComponent;
  let fixture: ComponentFixture<LadingadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadingadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadingadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
