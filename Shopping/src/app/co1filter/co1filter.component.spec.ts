import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co1filterComponent } from './co1filter.component';

describe('Co1filterComponent', () => {
  let component: Co1filterComponent;
  let fixture: ComponentFixture<Co1filterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co1filterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co1filterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
