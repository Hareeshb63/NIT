import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com2filterComponent } from './com2filter.component';

describe('Com2filterComponent', () => {
  let component: Com2filterComponent;
  let fixture: ComponentFixture<Com2filterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com2filterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com2filterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
