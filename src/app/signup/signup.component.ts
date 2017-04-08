import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public toasterconfig: ToasterConfig =
  new ToasterConfig({

    positionClass: 'position-center'
  });

  userToBeAdded: User = new User();
  //used to style email input if email is unavailable
  emailUnAvailable = false;

  //emitter recieved by landing page to activate login upon clicking "go to login"
  @Output()
  goToLoginClicked: EventEmitter<any> = new EventEmitter();

  constructor(private usersService: UsersService, private router: Router, private toasterService: ToasterService) {

  }

  ngOnInit() {
  }

  onClick() {
    this.goToLoginClicked.emit();
  }

  onSubmit() {
    // //generate random id for user
    // let id = Math.floor(Math.random() * 1000000);
    // //keep generating ids in case of a duplicate in users list
    // while(this.UsersService.getUsers().hasOwnProperty(id)){
    //   id = Math.floor(Math.random() * 1000000);
    // }
    // this.userToBeAdded.id = id;
    // //only navigate if user is added, addUser function return false if email is taken
    // if (this.UsersService.addUser(this.userToBeAdded)) {
    //   this.router.navigate(['user', id, 'main']);
    // } else {
    //   this.emailUnAvailable = true;
    // }

    //generate random id for user
    let id = Math.floor(Math.random() * 1000000);
    //keep generating ids in case of a duplicate in users list
    while (this.usersService.getUsers().hasOwnProperty(id)) {
      id = Math.floor(Math.random() * 1000000);
    }
    this.userToBeAdded.id = id;
    this.usersService.addUser(this.userToBeAdded).subscribe(res => {
      if (res.message === "user exists") {
        this.toasterService.pop('error', "Email already exists");
      } else {

        this.toasterService.pop('success', "User successfuly created");
        this.usersService.loginUser(this.userToBeAdded).subscribe(res => {
          this.router.navigate(['user', id, 'main']);
          console.log(res);
        })

        

      }
    })


  }

}
