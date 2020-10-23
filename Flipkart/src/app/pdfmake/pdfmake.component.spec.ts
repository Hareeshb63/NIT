import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfmakeComponent } from './pdfmake.component';

describe('PdfmakeComponent', () => {
  let component: PdfmakeComponent;
  let fixture: ComponentFixture<PdfmakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfmakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfmakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
