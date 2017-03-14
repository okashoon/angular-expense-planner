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

 //emitter recieved by landing page to activate login upon clicking go to login <a> element
  @Output() 
  createAccountClicked: EventEmitter<any> = new EventEmitter();

  constructor(private UsersService: UsersService) { }

  ngOnInit() {
  }
  onClick(){
    this.createAccountClicked.emit();
  }

  onSubmit(){
    this.UsersService.loginUser(this.userToBeLogged);
  }

}
