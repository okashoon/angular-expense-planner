import { User } from './user';
import { UsersService } from './users.service';
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

  mainList: any =  {};
  activeUser: User = {};

  
  @Output() public anounceChange = new EventEmitter<any>();

  constructor(private usersService: UsersService) { 
    this.activeUser = this.usersService.activeUser;
     let id = this.activeUser.id;
     console.log(id);
     let users = this.usersService.users;
     console.log(users);
     this.mainList = users[id].expenses || {};
  }


  addIncome(income: Income) {
    if (this.mainList.hasOwnProperty(income.category)) {
      this.mainList[income.category].push(income)
      this.usersService.addIncomes(this.mainList);
      this.anounceChange.emit();
    } else {
      this.mainList[income.category] = new Array;
      this.mainList[income.category].push(income);
      this.usersService.addIncomes(this.mainList);
      this.anounceChange.emit();
    }

  }

  deleteIncome(income: Income) {
    let index: number = this.mainList[income.category].indexOf(income);
    this.mainList[income.category].splice(index, 1);
    if (this.mainList[income.category][0] == null){
      delete this.mainList[income.category];
    }
  }

  editIncome(){
  }


  getTotalIncomes() {
    let totalIncomes = 0;
    for(let category in this.mainList){
      for(let expense of this.mainList[category]){
        totalIncomes += expense.amount;
      }
    }
    return totalIncomes;
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
