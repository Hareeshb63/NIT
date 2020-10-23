import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemostyleComponent } from './demostyle.component';

describe('DemostyleComponent', () => {
  let component: DemostyleComponent;
  let fixture: ComponentFixture<DemostyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemostyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemostyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
