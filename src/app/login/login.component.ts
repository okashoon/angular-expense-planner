import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userToBeLogged: User = new User();
  wrongEmailPassword = false;

 //emitter recieved by landing page to activate login upon clicking go to login <a> element
  @Output() 
  createAccountClicked: EventEmitter<any> = new EventEmitter();

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  onClick(){
    this.createAccountClicked.emit();
  }

  onSubmit(){
    //loginUser method, logs in the user and returns its id, reutrn null if didnt log in successfuly
    let id = this.usersService.loginUser(this.userToBeLogged);
    if(id) {
      this.router.navigate(['user',id,'main']);
    } else { this.wrongEmailPassword = true};
    this.userToBeLogged = new User();
  }

}
