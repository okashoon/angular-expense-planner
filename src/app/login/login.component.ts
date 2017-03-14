import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() 
  createAccountClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.createAccountClicked.emit();
  }

}
