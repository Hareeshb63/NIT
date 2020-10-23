import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfnavComponent } from './pdfnav.component';

describe('PdfnavComponent', () => {
  let component: PdfnavComponent;
  let fixture: ComponentFixture<PdfnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
