import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloanCalcComponent } from './homeloan-calc.component';

describe('HomeloanCalcComponent', () => {
  let component: HomeloanCalcComponent;
  let fixture: ComponentFixture<HomeloanCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloanCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloanCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
