import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output()
  goToLoginClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.goToLoginClicked.emit();
  }

}
