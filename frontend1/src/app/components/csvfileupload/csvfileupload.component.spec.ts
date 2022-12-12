import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvfileuploadComponent } from './csvfileupload.component';

describe('CsvfileuploadComponent', () => {
  let component: CsvfileuploadComponent;
  let fixture: ComponentFixture<CsvfileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvfileuploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvfileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
