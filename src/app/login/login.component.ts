import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userToBeLogged: User = new User();

  //for the 'wrong email' span in html
  wrongEmailPassword = false;

  //emitter recieved by landing page to activate login upon clicking 'go to login'
  @Output()
  createAccountClicked: EventEmitter<any> = new EventEmitter();

  constructor(private usersService: UsersService, private router: Router) { }

  onClick() {
    this.createAccountClicked.emit();
  }

  onSubmit() {
    //loginUser method, logs in the user and returns its id, reutrn null if didnt log in successfuly
    this.usersService.loginUser(this.userToBeLogged).subscribe(res => {
      this.router.navigate(['user', res.id, 'main']);
    })

  }

}
