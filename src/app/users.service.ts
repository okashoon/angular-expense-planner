import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersService {

  users = {}
  activeUser: User;

  constructor() {
    console.log("users service created");
    this.users = JSON.parse(localStorage.getItem("users")) || {};
  }

  storeData(): void {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("users", JSON.stringify(this.users));
    } else { console.log("Local storage is not supported by your browser") }
  }


  addUser(user: User) {
    for (let id in this.users) {
      if (user.email === this.users[id].email) {
        return false;
      }
    }
    this.users[user.id] = user;
    this.loginUser(user);
    this.storeData();
    return true;



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
    this.users[id].expenses = expenses;
    this.storeData();

  }

  addIncomes(incomes) {
    let id = this.activeUser.id;
    this.users[id].incomes = incomes;
  }

}
