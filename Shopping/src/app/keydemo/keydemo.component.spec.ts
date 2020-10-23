import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeydemoComponent } from './keydemo.component';

describe('KeydemoComponent', () => {
  let component: KeydemoComponent;
  let fixture: ComponentFixture<KeydemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeydemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
