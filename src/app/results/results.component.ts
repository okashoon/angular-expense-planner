import { IncomesService } from '../incomes.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../expense';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Component, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  totalExpenses: number = this.expensesService.getTotalExpenses();
  totalIncomes: number = this.incomesService.getTotalIncomes();
  //categpries of expenses (labels)
  categoryArray: string[] = ["No Expenses"];
  //total expenses for for each category
  categoryTotalsArray: number[] = [100];

  constructor(private expensesService: ExpensesService, private incomesService: IncomesService) {

    

  }

  updateResults() {
    this.totalExpenses = this.expensesService.getTotalExpenses();
    this.totalIncomes = this.incomesService.getTotalIncomes();
    //only update arrays if there is data, otherwise put ['noexpenses'] and [100]
    this.categoryArray = this.expensesService.getCategories()[0] && this.expensesService.getCategories() || ["No Expenses"];
    this.categoryTotalsArray =this.expensesService.getCategoryTotalsArray()[0] &&  this.expensesService.getCategoryTotalsArray() || [100];

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

  // events
  public chartClicked(e: any): void {}

  public chartHovered(e: any): void {}

}
