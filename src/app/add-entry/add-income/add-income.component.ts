
import { Component, Input, OnInit } from '@angular/core';
import { Income } from '../../income'

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {

  income: Income = new Income("salary", 5000);

  @Input()
  viewOn = false;

  openView(){
    this.viewOn = true;
  }
  ngOnInit(){}
  
  onSubmit(){
    
  }

}
