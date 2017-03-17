import { Component, Input, OnInit, Output } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  
  expense: Expense = new Expense("",0,"Bills");

  //viewOn is the variable used in *ngIf to populate the view, and its bound from the parent component(AddEntryComponent)
  @Input()
  viewOn = false;

  constructor(public expensesService: ExpensesService) { }

  ngOnInit() {}

  onSubmit(){
    this.expensesService.addExpense(this.expense);
    //after adding expense create a new instance, so it wont update the same old instance
    this.expense = new Expense("",0,"Bills");
  }

}
