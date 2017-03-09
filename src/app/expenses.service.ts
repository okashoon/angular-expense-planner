import { Expense } from './expense';
import { Injectable } from '@angular/core';

@Injectable()
export class ExpensesService {

  //Todo dummy data for testing
  mainList: any;
  totalExpenses: number = 0;

  constructor() {
    this.mainList = {
      transport: [new Expense('car gas', 500, 'transport')],
      education: [new Expense('school', 5000, 'education')],
      food: [new Expense('food', 400, 'food')]
    };
    let e = new Expense('tools', 1500, 'home')
    this.addExpense(e);
    this.addExpense(new Expense('cinema', 400, 'entertainment'));
    this.addExpense(new Expense('university', 10000, 'education'));
    console.log(this.mainList);
  }



  addExpense(expense: Expense) {
    if (this.mainList.hasOwnProperty(expense.category)) {
      this.mainList[expense.category].push(expense)
      this.totalExpenses += expense.amount;
    } else {
    this.mainList[expense.category] = [];
      this.mainList[expense.category].push(expense);
      this.totalExpenses += expense.amount;
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
    for(var category in this.mainList){
      let sum = 0;
      for(var expense of this.mainList[category]){
        sum += expense.amount;
      }
      categoryTotals.push(sum);
    }
    return categoryTotals;
  }



}
