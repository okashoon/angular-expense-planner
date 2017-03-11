import { EventEmitter } from '@angular/forms/src/facade/async';
import { Subject } from 'rxjs/Rx';
import { Expense } from './expense';
import { Injectable, Output } from '@angular/core';

@Injectable()
export class ExpensesService {

  mainList: any = {};
  totalExpenses: number = 0;

  //observable sources
  @Output() anounceChange = new EventEmitter<any>();

  constructor() {
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
