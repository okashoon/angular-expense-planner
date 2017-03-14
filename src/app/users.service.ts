import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersService {

  private users: Array<User> = [];
  private activeUser: User;

  constructor() { }

  addUser(user: User){
    this.users.push(user);
    console.log(this.users);
  }

  //assigns active user to the user passed in argument if he meets criteria and return true, else return false
  loginUser(user: User){
    for(let u of this.users){
      if(user.email === u.email && user.password === u.password){
        this.activeUser = u;
        console.log(this.activeUser);
        return true;
      }
    }
    console.log('user not found')
    return false;
  }

  logout(){
    this.activeUser = null;
  }
}
