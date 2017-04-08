import { User } from './user';
import { UsersService } from './users.service';
import { EventEmitter } from '@angular/forms/src/facade/async';
import { Subject } from 'rxjs/Rx';
import { Expense } from './expense';
import { Injectable, Output } from '@angular/core';
import { BaseRequestOptions, Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ 'headers': headers, method: "post" });


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
  private activeUser =this.usersService.getActiveUser();
  

  //observable, used to update results in resultsComponent when data changes
  @Output() anounceChange = new EventEmitter<any>();

  constructor(private usersService: UsersService, private http: Http) {

  }


  addExpense(expense: Expense) {
    
    // if (this.mainList.hasOwnProperty(expense.category)) {
    //   this.mainList[expense.category].push(expense)
    //   this.usersService.addExpenses(this.mainList);
    //   this.anounceChange.emit();


    // } else {
    //   this.mainList[expense.category] = new Array;
    //   this.mainList[expense.category].push(expense);
    //   this.usersService.addExpenses(this.mainList);
    //   this.anounceChange.emit();

    // }


    this.http.post('/api/users/'+this.activeUser.id+'/expenses',JSON.stringify(expense), options).subscribe(()=>this.anounceChange.emit());
    
    

  }

  deleteExpense(expense: Expense) {
    this.http.put('/api/users/'+this.activeUser.id+'/expenses/delete', JSON.stringify(expense), new RequestOptions(
      {'headers': headers, method: 'put'}
    )).subscribe();
    
  }

  editExpense(expense) {
    return this.http.put('/api/users/'+this.activeUser.id+'/expenses', JSON.stringify(expense), new RequestOptions(
      {'headers': headers, method: 'put'}
    ))

  }

  // getTotalExpenses() {

  //   this.getExpenses().subscribe(expenses => {})
  //   let totalExpenses = 0;
  //   for (let category in this.mainList) {
  //     for (let expense of this.mainList[category]) {
  //       totalExpenses += expense.amount;
  //       console.log(expense);
  //     }
  //   }
  //   console.log(totalExpenses)
  //   return totalExpenses;

  // }


  getExpenses() {
    return this.http.get('/api/users/' + this.activeUser.id + '/expenses').map(expenses => expenses.json());
    
  }



}
