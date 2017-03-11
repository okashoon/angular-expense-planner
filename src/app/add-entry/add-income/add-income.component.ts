import { IncomesService } from '../../incomes.service';

import { Component, Input, OnInit } from '@angular/core';
import { Income } from '../../income'

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {

  income: Income = new Income("salary1", 5000, "salary");

  constructor(private incomesService: IncomesService){}

  @Input()
  viewOn = false;

  openView(){
    this.viewOn = true;
  }
  ngOnInit(){}
  
  onSubmit(){
    this.incomesService.addIncome(this.income);
  }

}
