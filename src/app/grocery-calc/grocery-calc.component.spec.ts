import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCalcComponent } from './grocery-calc.component';

describe('GroceryCalcComponent', () => {
  let component: GroceryCalcComponent;
  let fixture: ComponentFixture<GroceryCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
