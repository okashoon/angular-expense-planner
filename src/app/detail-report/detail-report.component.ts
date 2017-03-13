import { Income } from '../income';
import { Expense } from '../expense';
import { IncomesService } from '../incomes.service';
import { ExpensesService } from '../expenses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-report',
  templateUrl: './detail-report.component.html',
  styleUrls: ['./detail-report.component.css']
})
export class DetailReportComponent implements OnInit {

  

  expensesMainList;
  incomesMainList;

  totalExpenses: number;
  totalIncomes: number;

  expensesCategoryArray: string[];
  incomesCategoryArray: string[];

  expensesCategoryTotalsArray: number[];
  incomesCategoryTotalsArray: number[];

  updateData() {
    this.expensesMainList = this.expensesService.getMainList();
    this.incomesMainList = this.incomesService.getMainList();


    this.totalExpenses = this.expensesService.getTotalExpenses();
    this.totalIncomes = this.incomesService.getTotalIncomes();

    //categpries of expenses/incomes (labels) -- checking first that its not empty, otherwise assign "no expenses" to it
    this.expensesCategoryArray = this.expensesService.getCategories()[0] && this.expensesService.getCategories() || ["No Expenses"];
    this.incomesCategoryArray = this.incomesService.getCategories()[0] && this.incomesService.getCategories() || ["No Incomes"];

    //total expenses/incomes for  each category
    this.expensesCategoryTotalsArray = this.expensesService.getCategoryTotalsArray()[0] && this.expensesService.getCategoryTotalsArray() || [0];
    this.incomesCategoryTotalsArray = this.incomesService.getCategoryTotalsArray()[0] && this.incomesService.getCategoryTotalsArray() || [0];
  }
  constructor(private expensesService: ExpensesService, private incomesService: IncomesService) { 
    this.updateData();
    
  }

  ngOnInit() {
  }

  deleteExpense(expense: Expense) {
    this.expensesService.deleteExpense(expense);
    this.updateData();
  }

  deleteIncome(income: Income) {
    this.incomesService.deleteIncome(income);
    this.updateData();
  }

  enableEdit(element: any){
    element.disabled = false;
  }
  disableEdit(element: any){
    element.disabled = true;
    //to save updated list to local storage
    this.expensesService.editExpense();
    this.incomesService.editIncome();
    this.updateData();
    
    
    
  }

}
