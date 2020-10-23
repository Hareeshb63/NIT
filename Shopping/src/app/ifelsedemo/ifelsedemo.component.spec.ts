import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelsedemoComponent } from './ifelsedemo.component';

describe('IfelsedemoComponent', () => {
  let component: IfelsedemoComponent;
  let fixture: ComponentFixture<IfelsedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfelsedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelsedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
