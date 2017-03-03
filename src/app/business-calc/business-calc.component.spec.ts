import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCalcComponent } from './business-calc.component';

describe('BusinessCalcComponent', () => {
  let component: BusinessCalcComponent;
  let fixture: ComponentFixture<BusinessCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
