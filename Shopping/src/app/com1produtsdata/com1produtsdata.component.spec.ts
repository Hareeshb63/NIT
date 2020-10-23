import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com1produtsdataComponent } from './com1produtsdata.component';

describe('Com1produtsdataComponent', () => {
  let component: Com1produtsdataComponent;
  let fixture: ComponentFixture<Com1produtsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com1produtsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com1produtsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
