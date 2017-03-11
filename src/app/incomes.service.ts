import { EventEmitter } from '@angular/forms/src/facade/async';
import { Subject } from 'rxjs/Rx';
import { Income } from './income';
import { Injectable, Output } from '@angular/core';

@Injectable()
export class IncomesService {

  mainList: any = JSON.parse(localStorage.getItem("incomes")) || {};
  totalIncomes: number =JSON.parse(localStorage.getItem("totalIncomes")) || 0;

  
  @Output() public anounceChange = new EventEmitter<any>();

  constructor() { }

  storeData(): void {
    if (typeof(Storage) !== "undefined") {
     localStorage.setItem("incomes", JSON.stringify(this.mainList));
    localStorage.setItem("totalIncomes", JSON.stringify(this.totalIncomes));
    } else {console.log("Local storage is not supported by your browser")}
  }

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
    this.storeData();

  }

  getTotalIncomes() {
    return this.totalIncomes;
  }

}
