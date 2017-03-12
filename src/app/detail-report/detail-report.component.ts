import { IncomesService } from '../incomes.service';
import { ExpensesService } from '../expenses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-report',
  templateUrl: './detail-report.component.html',
  styleUrls: ['./detail-report.component.css']
})
export class DetailReportComponent implements OnInit {

  mainList = this.expensesService.getMainList();
  totalExpenses: number = this.expensesService.getTotalExpenses();
  totalIncomes: number = this.incomesService.getTotalIncomes();
  //categpries of expenses (labels) -- checking first that its not empty, otherwise assign "no expenses" to ti
  categoryArray: string[] = this.expensesService.getCategories()[0] && this.expensesService.getCategories() || ["No Expenses"];
  //total expenses for for each category
  categoryTotalsArray: number[] = this.expensesService.getCategoryTotalsArray()[0] &&  this.expensesService.getCategoryTotalsArray() || [100];

  constructor(private expensesService: ExpensesService, private incomesService: IncomesService) { }

  ngOnInit() {
  }

}
