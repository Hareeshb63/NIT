import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com1filterComponent } from './com1filter.component';

describe('Com1filterComponent', () => {
  let component: Com1filterComponent;
  let fixture: ComponentFixture<Com1filterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com1filterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com1filterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
