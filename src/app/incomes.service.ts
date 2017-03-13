import { EventEmitter } from '@angular/forms/src/facade/async';
import { Subject } from 'rxjs/Rx';
import { Income } from './income';
import { Injectable, Output } from '@angular/core';

@Injectable()
export class IncomesService {

  //Income Object structure: 
  // {
  //   name: string, 
  //   amount: number, 
  //   category: string
  // }
  //
  // mainList structure :
  // {
  //   "category1": [{Income1}, {Income2 }, {Income3}],
  //   "category2": [{Income1}, {Income2 }]
  // }

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

  deleteIncome(income: Income) {
    let index: number = this.mainList[income.category].indexOf(income);
    this.mainList[income.category].splice(index, 1);
    this.totalIncomes -= income.amount;
    if (this.mainList[income.category][0] == null){
      delete this.mainList[income.category];
    }
  }


  getTotalIncomes() {
    return this.totalIncomes;
  }

  getCategories() {
    return Object.keys(this.mainList);
  }

  getCategoryTotalsArray(): number[] {
    let categoryTotals: number[] = [];
    for (var category in this.mainList) {
      let sum = 0;
      for (var expense of this.mainList[category]) {
        sum += expense.amount;
      }
      categoryTotals.push(sum);
    }
    return categoryTotals;
  }

  getMainList(){
    return this.mainList;
  }

}