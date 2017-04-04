import { Injectable } from '@angular/core';
import { User } from './user';
import { BaseRequestOptions, Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

const headers = new Headers ({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ 'headers': headers, method: "post" });

@Injectable()
export class UsersService {

 

  private users = {}
  private activeUser: User;

  constructor(private http: Http) {
    
    //this.http.get('/api/users/109').map(res => res.json()).subscribe((res) => {console.log(res)});
    //this.users = JSON.parse(localStorage.getItem("users")) || {};
  }



  addUser(user: User) {
    // for (let id in this.users) {
    //   if (user.email === this.users[id].email) {
    //     return false;
    //   }
    // }
    // this.users[user.id] = user;
    // console.log(this.users);
    return this.http.post('/api/users',JSON.stringify(user), options).map(res => res.json());
    
    // this.loginUser(user);
    // return true;
  }

  //assigns active user to the user passed in argument if he meets criteria and return true, else return false
  loginUser(user: User) {
    
    for (let id in this.users) {
      if (user.email === this.users[id].email && user.password === this.users[id].password) {
        this.activeUser = this.users[id];
        return this.users[id].id;
      }
    }
  }

  logout() {
    this.activeUser = null;
  }

  addExpenses(expenses) {
    let id = this.activeUser.id;
    this.http.post('/api/users/'+id+'/expenses',JSON.stringify(expenses),options).subscribe();
    this.users[id].expenses = expenses;

  }

  addIncomes(incomes) {
    let id = this.activeUser.id;
    this.http.post('/api/users/'+id+'/incomes', JSON.stringify(incomes),options).subscribe();
    this.users[id].incomes = incomes;
  }

  getActiveUser(){
    return this.activeUser;
  }
  getUsers(){
    return this.users;
  }

}
