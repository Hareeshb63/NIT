import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForindexComponent } from './ng-forindex.component';

describe('NgForindexComponent', () => {
  let component: NgForindexComponent;
  let fixture: ComponentFixture<NgForindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
