
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {

  public income = {name: "salary", category: "salary", amount: 1000};
  viewOn = false;

  openView(){
    this.viewOn = true;
  }
  ngOnInit(){}

}
