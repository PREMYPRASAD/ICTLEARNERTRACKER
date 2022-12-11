import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatclistComponent } from './batclist.component';

describe('BatclistComponent', () => {
  let component: BatclistComponent;
  let fixture: ComponentFixture<BatclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatclistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
