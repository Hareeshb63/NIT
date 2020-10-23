import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com2productComponent } from './com2product.component';

describe('Com2productComponent', () => {
  let component: Com2productComponent;
  let fixture: ComponentFixture<Com2productComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com2productComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com2productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
