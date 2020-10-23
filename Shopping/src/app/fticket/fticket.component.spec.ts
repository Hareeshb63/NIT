import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FticketComponent } from './fticket.component';

describe('FticketComponent', () => {
  let component: FticketComponent;
  let fixture: ComponentFixture<FticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
