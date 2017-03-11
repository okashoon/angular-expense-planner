import { Component, Input, OnInit, Output } from '@angular/core';
import { ExpensesService } from '../../expenses.service';
import { Expense } from '../../expense';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expense: Expense = new Expense("",0,"");

  @Input()
  viewOn = false;

  constructor(public expensesService: ExpensesService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    this.expensesService.addExpense(this.expense);
    // let e2 = new Expense("pants",200,"clothes")
    // this.expensesService.addExpense(e2);
    // console.log(e2);
    this.expense = new Expense("",0,"");
  }

}
