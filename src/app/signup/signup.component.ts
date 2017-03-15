import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userToBeAdded: User = new User();

  //emitter recieved by landing page to activate login upon clicking go to login <a> element
  @Output()
  goToLoginClicked: EventEmitter<any> = new EventEmitter();

  constructor(private UsersService: UsersService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    this.goToLoginClicked.emit();
  }

  onSubmit() {
    //todo: verify that id is not present in list of users, if present generate another one
    
    let id = Math.floor(Math.random() * 1000000);
    this.userToBeAdded.id = id;
    //change id if addUser returns false/ id is present in database
    this.router.navigate(['user', id, 'main']);
    
    this.UsersService.addUser(this.userToBeAdded);
    
    this.userToBeAdded = new User();

  }

}
