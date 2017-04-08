import { User } from './user';
import { UsersService } from './users.service';
import { EventEmitter } from '@angular/forms/src/facade/async';
import { Subject } from 'rxjs/Rx';
import { Income } from './income';
import { Injectable, Output } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ 'headers': headers, method: "post" });

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

  constructor(private usersService: UsersService, private http: Http) { 
    this.activeUser = this.usersService.getActiveUser();
     let id = this.activeUser.id;
     this.http.get('/api/users/'+this.activeUser.id+'/incomes').map(res => res.json()).subscribe(res => {
      this.mainList = res;
    })

  }


  addIncome(income: Income) {
    // if (this.mainList.hasOwnProperty(income.category)) {
    //   this.mainList[income.category].push(income)
    //   this.usersService.addIncomes(this.mainList);
    //   this.anounceChange.emit();
    // } else {
    //   this.mainList[income.category] = new Array;
    //   this.mainList[income.category].push(income);
    //   this.usersService.addIncomes(this.mainList);
    //   this.anounceChange.emit();
    // }

        this.http.post('/api/users/'+this.activeUser.id+'/incomes',JSON.stringify(income), options).subscribe(() => console.log('income added'));
        this.anounceChange.emit();

  }

  deleteIncome(income: Income) {
    // let index: number = this.mainList[income.category].indexOf(income);
    // this.mainList[income.category].splice(index, 1);
    // if (this.mainList[income.category][0] == null){
    //   delete this.mainList[income.category];
    // }
    //   this.usersService.addIncomes(this.mainList);

    this.http.put('/api/users/'+this.activeUser.id+'/incomes/delete', JSON.stringify(income), new RequestOptions(
      {'headers': headers, method: 'put'}
    )).subscribe();
    
  }

  editIncome(income){
      // this.usersService.addIncomes(this.mainList);

      return this.http.put('/api/users/'+this.activeUser.id+'/incomes', JSON.stringify(income), new RequestOptions(
      {'headers': headers, method: 'put'}
    ))

    
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

  getIncomes(){
    return this.http.get('/api/users/'+this.activeUser.id+'/incomes').map(res => res.json());
  }

}
