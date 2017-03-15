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
  //used to style email input if email is unavailable
  emailUnAvailable = false;

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

    let id = Math.floor(Math.random() * 1000000);
    //keep generating ids in case of a duplicate in users list
    while(this.UsersService.users.hasOwnProperty(id)){
      id = Math.floor(Math.random() * 1000000);
    }
    this.userToBeAdded.id = id;
    //only navigate if user is added, addUser function return false if email is taken
    if (this.UsersService.addUser(this.userToBeAdded)) {
      this.router.navigate(['user', id, 'main']);
    } else {
      this.emailUnAvailable = true;
    }

    this.userToBeAdded = new User();

  }

}
