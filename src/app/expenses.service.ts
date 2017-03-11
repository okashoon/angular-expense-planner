import { EventEmitter } from '@angular/forms/src/facade/async';
import { Subject } from 'rxjs/Rx';
import { Expense } from './expense';
import { Injectable, Output } from '@angular/core';

@Injectable()
export class ExpensesService {

  //retrieve data from local storage if present, otherwise create empty object
  mainList: any = JSON.parse(localStorage.getItem("expenses")) || {};
  totalExpenses: number = JSON.parse(localStorage.getItem("totalExpenses")) || 0;

  //observable sources
  @Output() anounceChange = new EventEmitter<any>();

  constructor() {
  }
  


  storeData(): void {
    if (typeof(Storage) !== "undefined") {
     localStorage.setItem("expenses", JSON.stringify(this.mainList));
    localStorage.setItem("totalExpenses", JSON.stringify(this.totalExpenses));
    } else {console.log("Local storage is not supported by your browser")}
  }

  addExpense(expense: Expense) {
    if (this.mainList.hasOwnProperty(expense.category)) {
      this.mainList[expense.category].push(expense)
      this.totalExpenses += expense.amount;
      this.anounceChange.emit();
    } else {
      this.mainList[expense.category] = new Array;
      this.mainList[expense.category].push(expense);
      this.totalExpenses += expense.amount;
      this.anounceChange.emit();

    }
    this.storeData();

  }


  deleteExpense(expense: Expense) {
    let index: number = this.mainList[expense.category].indexOf(expense);
    this.mainList[expense.category].splice(index, 1);
    this.totalExpenses -= expense.amount;
  }

  getTotalExpenses() {
    return this.totalExpenses;
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



}
