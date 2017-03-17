import { UsersService } from './users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //to block the user from navigating through the navigation bar, any navigation will reroute to landing page
  constructor(private activeRoute: ActivatedRoute, private usersService: UsersService, private router: Router){
    this.activeRoute.params.subscribe(p => {
      if(!usersService.getActiveUser()){
        router.navigate([''])
      }
    })
  }
  
}
