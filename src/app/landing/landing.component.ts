import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

   height: number = document.documentElement.clientHeight;
   width: number = document.documentElement.clientWidth;

   signupView: boolean = true;
   loginView: boolean = false;

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.height = event.target.innerHeight;
  //   this.width = event.target.innerWidth;
  // }

  constructor() { }

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
