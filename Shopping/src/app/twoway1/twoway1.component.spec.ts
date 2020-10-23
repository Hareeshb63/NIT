import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Twoway1Component } from './twoway1.component';

describe('Twoway1Component', () => {
  let component: Twoway1Component;
  let fixture: ComponentFixture<Twoway1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Twoway1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Twoway1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
