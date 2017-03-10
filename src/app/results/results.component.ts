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
  categoryArray: string[] =       ["No Expenses"];
  categoryTotalsArray: number[] = [100];

  constructor(private expensesService: ExpensesService) {

  }



  ngOnInit() {

   
    this.expensesService.anounceChange.subscribe(p => {
      this.totalExpenses = this.expensesService.getTotalExpenses();
      this.categoryArray = this.expensesService.getCategories();
      this.categoryTotalsArray = this.expensesService.getCategoryTotalsArray();

      this.doughnutChartLabels = this.categoryArray;
      this.doughnutChartData = this.categoryTotalsArray


    });

  }

  // Doughnut

  public doughnutChartLabels: string[] =this.categoryArray ;
  public doughnutChartData: number[] =this.categoryTotalsArray ;





  // events
  public chartClicked(e: any): void {

  }

  public chartHovered(e: any): void {

  }

}
