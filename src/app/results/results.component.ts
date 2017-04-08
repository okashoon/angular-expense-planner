import { IncomesService } from '../incomes.service';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../expense';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  totalExpenses: number = 0;
  totalIncomes: number;
  expenseIncomePercent: number = this.totalExpenses / this.totalIncomes * 100;

  //categpries of expenses (labels) -- checking first that its not empty, otherwise assign "no expenses" to it
  constructor(private expensesService: ExpensesService, private incomesService: IncomesService) { }

  updateResults() {

    this.expensesService.getExpenses().subscribe(expenses => {

      delete expenses._id;
      let categoryTotals = []
      for (var category in expenses) {
        let sum = 0;
        for (var expense of expenses[category]) {
          sum += expense.amount;
        }
        if (sum != 0 && !isNaN(sum)) {
          categoryTotals.push(sum);
        }
      }
      this.doughnutChartData = categoryTotals[0] && categoryTotals || [0];

      let categories = [];
      for (let category in expenses) {
        if (expenses[category].length >= 1 && category != "_id") {
          categories.push(category);
        }
      }
      this.doughnutChartLabels = categories[0] && categories || ['no expenses'];

      let totalExpenses = 0;
      for (let category in expenses) {
        for (let expense of expenses[category]) {
          totalExpenses += expense.amount;
        }
      }
      this.totalExpenses = totalExpenses;

      this.incomesService.getIncomes().subscribe(incomes => {
        delete incomes._id;

        let totalIncomes = 0;
        for (let category in incomes) {
          for (let income of incomes[category]) {
            totalIncomes += income.amount;
          }
        }
        this.totalIncomes = totalIncomes;
    this.expenseIncomePercent = this.totalExpenses / this.totalIncomes * 100;
        
      })
    })




    // //only update arrays if there is data, otherwise put ['no expenses'] and [100]
    // this.categoryArray = this.expensesService.getCategories()[0] && this.expensesService.getCategories();
    // this.categoryTotalsArray = this.expensesService.getCategoryTotalsArray()[0] && this.expensesService.getCategoryTotalsArray();

    // this.doughnutChartLabels = this.categoryArray;
    // this.doughnutChartData = this.categoryTotalsArray
  }

  ngOnInit() {
    this.updateResults();
    //update results whenever expenses or incomes changes
     this.expensesService.anounceChange.subscribe(p => {this.updateResults()});
     this.incomesService.anounceChange.subscribe(p => {this.updateResults()});
  }

  // Doughnut
  public doughnutChartLabels: string[] = ["No Expenses"];;
  public doughnutChartData: number[] = [0];

  // events, 
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
