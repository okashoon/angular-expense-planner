import { Subject } from 'rxjs/Rx';
import { Expense } from './expense';
import { Injectable } from '@angular/core';

@Injectable()
export class ExpensesService {

  //Todo dummy data for testing
  mainList: any;
  totalExpenses: number = 0;

  //observable sources
  private anounceChangeSource = new Subject<Expense>();
  //observable streams
  anounceChange = this.anounceChangeSource.asObservable();

  constructor() {
    this.mainList = {};
  }



  addExpense(expense: Expense) {
    if (this.mainList.hasOwnProperty(expense.category)) {
      this.mainList[expense.category].push(expense)
      this.totalExpenses += expense.amount;
     this.anounceChangeSource.next();
    } else {
      this.mainList[expense.category] = new Array;
      this.mainList[expense.category].push(expense);
      
      this.totalExpenses += expense.amount;
     this.anounceChangeSource.next();

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
