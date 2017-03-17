import { User } from './user';
import { UsersService } from './users.service';
import { EventEmitter } from '@angular/forms/src/facade/async';
import { Subject } from 'rxjs/Rx';
import { Expense } from './expense';
import { Injectable, Output } from '@angular/core';

@Injectable()
export class ExpensesService {
  //Expense Object structure: 
  // {
  //   name: string, 
  //   amount: number, 
  //   category: string
  // }
  //
  // mainList structure :
  // {
  //   "category1": [{Expense1}, {Expense2 }, {Expense3}],
  //   "category2": [{Expense1}, {Expense2 }]
  // }

  //retrieve data from local storage if present, otherwise create empty object
  private mainList = {};
  private activeUser: User;



  //observable, used to update results in resultsComponent when data changes
  @Output() anounceChange = new EventEmitter<any>();

  constructor(private usersService: UsersService) {
    this.activeUser = this.usersService.getActiveUser();
    let id = this.activeUser.id;
    let users = this.usersService.getUsers();
    this.mainList = users[id].expenses || {};

  }

  addExpense(expense: Expense) {
    if (this.mainList.hasOwnProperty(expense.category)) {
      this.mainList[expense.category].push(expense)
      this.usersService.addExpenses(this.mainList);
      this.anounceChange.emit();


    } else {
      this.mainList[expense.category] = new Array;
      this.mainList[expense.category].push(expense);
      this.usersService.addExpenses(this.mainList);
      this.anounceChange.emit();

    }

  }

  deleteExpense(expense: Expense) {
    let index: number = this.mainList[expense.category].indexOf(expense);
    this.mainList[expense.category].splice(index, 1);
    if (this.mainList[expense.category][0] == null) {
      delete this.mainList[expense.category];
    }
      this.usersService.addExpenses(this.mainList);
    
  }

  editExpense() {
    this.usersService.addExpenses(this.mainList);

  }

  getTotalExpenses() {
    let totalExpenses = 0;
    for (let category in this.mainList) {
      for (let expense of this.mainList[category]) {
        totalExpenses += expense.amount;
      }
    }
    return totalExpenses;

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

  getMainList() {
    return this.mainList;
  }



}
