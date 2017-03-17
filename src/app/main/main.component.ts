import { User } from '../user';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  activeUser: User;

  constructor(private usersService: UsersService) {
    this.activeUser = usersService.getActiveUser();
   }
}
