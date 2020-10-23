import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelexporComponent } from './excelexpor.component';

describe('ExcelexporComponent', () => {
  let component: ExcelexporComponent;
  let fixture: ComponentFixture<ExcelexporComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelexporComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelexporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
