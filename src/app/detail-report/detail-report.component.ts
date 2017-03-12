import { IncomesService } from '../incomes.service';
import { ExpensesService } from '../expenses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-report',
  templateUrl: './detail-report.component.html',
  styleUrls: ['./detail-report.component.css']
})
export class DetailReportComponent implements OnInit {

  expensesMainList = this.expensesService.getMainList();
  incomesMainList = this.incomesService.getMainList();

  totalExpenses: number = this.expensesService.getTotalExpenses();
  totalIncomes: number = this.incomesService.getTotalIncomes();
  //categpries of expenses (labels) -- checking first that its not empty, otherwise assign "no expenses" to ti
  expensesCategoryArray: string[] = this.expensesService.getCategories()[0] && this.expensesService.getCategories() || ["No Expenses"];
  //total expenses for for each category
  expensesCategoryTotalsArray: number[] = this.expensesService.getCategoryTotalsArray()[0] &&  this.expensesService.getCategoryTotalsArray() || [100];

  incomesCategoryArray: string[] = this.incomesService.getCategories()[0] && this.incomesService.getCategories() || ["No Incomes"];
  //total expenses for for each category
  incomesCategoryTotalsArray: number[] = this.incomesService.getCategoryTotalsArray()[0] &&  this.incomesService.getCategoryTotalsArray() || [0];



  constructor(private expensesService: ExpensesService, private incomesService: IncomesService) { }

  ngOnInit() {
  }

}
