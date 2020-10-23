import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomevalidationComponent } from './customevalidation.component';

describe('CustomevalidationComponent', () => {
  let component: CustomevalidationComponent;
  let fixture: ComponentFixture<CustomevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
