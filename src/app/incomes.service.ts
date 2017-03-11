import { EventEmitter } from '@angular/forms/src/facade/async';
import { Subject } from 'rxjs/Rx';
import { Income } from './income';
import { Injectable, Output } from '@angular/core';

@Injectable()
export class IncomesService {

  mainList: any = {};
  totalIncomes: number = 0;

  
  @Output() public anounceChange = new EventEmitter<any>();

  constructor() { }

  addIncome(income: Income) {
    if (this.mainList.hasOwnProperty(income.category)) {
      this.mainList[income.category].push(income)
      this.totalIncomes += income.amount;
      this.anounceChange.emit();
    } else {
      this.mainList[income.category] = new Array;
      this.mainList[income.category].push(income);
      this.totalIncomes += income.amount;
      this.anounceChange.emit();
    }

  }

  getTotalIncomes() {
    return this.totalIncomes;
  }

}
