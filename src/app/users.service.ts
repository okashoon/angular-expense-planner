import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersService {

  users = {}
  activeUser: User;

  constructor() {
   }

   storeData(): void {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("expenses", JSON.stringify(this.mainList));
    } else { console.log("Local storage is not supported by your browser") }
  }


  addUser(user: User){
    this.activeUser = user;
    this.users[user.id] = user;
    
  }

  //assigns active user to the user passed in argument if he meets criteria and return true, else return false
  loginUser(user: User){
    for(let u in this.users){
      if(user.email === this.users[u].email && user.password === this.users[u].password){
        this.activeUser = u;
        return this.users[u].id;
      }
    }
  }

  logout(){
    this.activeUser = null;
  }

  addExpenses(expenses){
    let id = this.activeUser.id;
    this.users[id].expenses = expenses;
    
  }

  addIncomes(incomes){
    let id = this.activeUser.id;
    this.users[id].incomes = incomes;
  }

}
