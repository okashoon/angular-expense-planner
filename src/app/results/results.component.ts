import { IncomesService } from '../incomes.service';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../expense';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  totalExpenses: number = this.expensesService.getTotalExpenses();
  totalIncomes: number = this.incomesService.getTotalIncomes();
  expenseIncomePercent: number = this.totalExpenses/this.totalIncomes*100;

  //categpries of expenses (labels) -- checking first that its not empty, otherwise assign "no expenses" to it
  categoryArray: string[] = this.expensesService.getCategories()[0] && this.expensesService.getCategories() || ["No Expenses"];
  //total expenses for each category
  categoryTotalsArray: number[] = this.expensesService.getCategoryTotalsArray()[0] &&  this.expensesService.getCategoryTotalsArray() || [0];

  constructor(private expensesService: ExpensesService, private incomesService: IncomesService) {}

  updateResults() {
    this.totalExpenses = this.expensesService.getTotalExpenses();
    this.totalIncomes = this.incomesService.getTotalIncomes();
    this.expenseIncomePercent = this.totalExpenses/this.totalIncomes*100;
    
    //only update arrays if there is data, otherwise put ['no expenses'] and [100]
    this.categoryArray = this.expensesService.getCategories()[0] && this.expensesService.getCategories() || ["No Expenses"];
    this.categoryTotalsArray =this.expensesService.getCategoryTotalsArray()[0] &&  this.expensesService.getCategoryTotalsArray() || [0];

    this.doughnutChartLabels = this.categoryArray;
    this.doughnutChartData = this.categoryTotalsArray
  }

  ngOnInit() {
    //update results whenever expenses or incomes changes
    this.expensesService.anounceChange.subscribe(p => {this.updateResults()});
    this.incomesService.anounceChange.subscribe(p => {this.updateResults()});
  }

  // Doughnut
  public doughnutChartLabels: string[] = this.categoryArray;
  public doughnutChartData: number[] = this.categoryTotalsArray;

  // events, 
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

}
