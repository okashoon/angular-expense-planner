import { ExpensesService } from '../expenses.service';
import { Expense } from '../expense';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  totalExpenses: number= this.expensesService.getTotalExpenses();
  categoryArray: string[]= this.expensesService.getCategories();
  categoryTotalsArray: number[]= this.expensesService.getCategoryTotalsArray();

  constructor(private expensesService: ExpensesService) {
    
   }

  ngOnInit() {
    
    
  }

  // Doughnut
  public doughnutChartLabels:string[] = this.categoryArray;
  public doughnutChartData:number[] = this.categoryTotalsArray
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
