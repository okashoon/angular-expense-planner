import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usersService: UsersService,private router: Router) { }

  ngOnInit() {
  }

  logout(){
    //logout and navigate to landing page
    this.usersService.logout();
    this.router.navigate([''])
  }

}
