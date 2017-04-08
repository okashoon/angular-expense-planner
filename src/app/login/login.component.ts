import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Component, EventEmitter, Output } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public toasterconfig: ToasterConfig =
  new ToasterConfig({

    positionClass: 'position-center'
  });

  userToBeLogged: User = new User();

  //for the 'wrong email' span in html
  wrongEmailPassword = false;

  //emitter recieved by landing page to activate login upon clicking 'go to login'
  @Output()
  createAccountClicked: EventEmitter<any> = new EventEmitter();

  constructor(private usersService: UsersService, private router: Router, private toasterService: ToasterService) { }

  onClick() {
    this.createAccountClicked.emit();
  }

  onSubmit() {
    //loginUser method, logs in the user and returns its id, reutrn null if didnt log in successfuly
    this.usersService.loginUser(this.userToBeLogged).subscribe(res => {
      if(res.firstName){
        this.toasterService.pop('success', 'Successfuly logged in')
        this.router.navigate(['user', res.id, 'main']);
      } else {
        this.toasterService.pop('error', 'wrong email or password')
      }
    })

  }

}
