import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co1productsdataComponent } from './co1productsdata.component';

describe('Co1productsdataComponent', () => {
  let component: Co1productsdataComponent;
  let fixture: ComponentFixture<Co1productsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co1productsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co1productsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
