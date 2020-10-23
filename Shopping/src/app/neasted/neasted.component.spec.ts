import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeastedComponent } from './neasted.component';

describe('NeastedComponent', () => {
  let component: NeastedComponent;
  let fixture: ComponentFixture<NeastedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeastedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeastedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
