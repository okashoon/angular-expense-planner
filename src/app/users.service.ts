import { Injectable } from '@angular/core';
import { User } from './user';
import { BaseRequestOptions, Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const headers = new Headers({ 'Content-Type': 'application/json' });
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
    //api responds with saving user and sending back user as json, or responds by {message:"user exists"} if email exists in database
    return this.http.post('/api/users/signup', JSON.stringify(user), options).map(res => res.json());


    // return true;
  }

  //assigns active user to the user passed in argument if he meets criteria and return true, else return false
  loginUser(user: User) {
    //the do : Perform a side effect for every emission on the source Observable, but return an Observable that is identical to the source
    //beacuse i want to use that observable in the login component
    return this.http.post('/api/users/login', JSON.stringify(user), options).map(res => res.json()).do((res)=>{
      this.activeUser = res;
    });
  }

  logout() {
    this.activeUser = null;
  }


  getActiveUser() {
    return this.activeUser;
  }
  getUsers() {
    return this.users;
  }

}
