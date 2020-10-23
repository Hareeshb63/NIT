import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderarrayComponent } from './builderarray.component';

describe('BuilderarrayComponent', () => {
  let component: BuilderarrayComponent;
  let fixture: ComponentFixture<BuilderarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
