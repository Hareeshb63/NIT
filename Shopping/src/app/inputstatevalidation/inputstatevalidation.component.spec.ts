import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputstatevalidationComponent } from './inputstatevalidation.component';

describe('InputstatevalidationComponent', () => {
  let component: InputstatevalidationComponent;
  let fixture: ComponentFixture<InputstatevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputstatevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputstatevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
