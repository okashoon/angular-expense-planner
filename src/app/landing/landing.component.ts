import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  //  height: number = window.innerHeight;
  //  width: number = window.innerWidth;

   height: number = document.documentElement.clientHeight;
   width: number = document.documentElement.clientWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = event.target.innerHeight;
    this.width = event.target.innerWidth;
    
    
  }

  constructor() { }

  ngOnInit() {
  }

}
