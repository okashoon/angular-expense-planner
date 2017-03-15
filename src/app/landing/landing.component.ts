import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  //for background image
   height: number = document.documentElement.clientHeight;
   width: number = document.documentElement.clientWidth;

   //for toggling between login and signup
   signupView: boolean = true;
   loginView: boolean = false;

  constructor() { }

  onResize(event) {
     this.height = event.target.innerHeight;
     this.width = event.target.innerWidth;
  }    

  ngOnInit() {
  }

  openSignup(){
    this.loginView = false;
    this.signupView = true;
    console.log(this.loginView);
  } 
  openLogin(){
    this.signupView = false;
    this.loginView = true;
    console.log(this.loginView);
  } 

}
