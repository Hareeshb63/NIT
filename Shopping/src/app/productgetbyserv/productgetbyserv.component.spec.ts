import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgetbyservComponent } from './productgetbyserv.component';

describe('ProductgetbyservComponent', () => {
  let component: ProductgetbyservComponent;
  let fixture: ComponentFixture<ProductgetbyservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgetbyservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgetbyservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
