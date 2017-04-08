import { User } from '../user';
import { UsersService } from '../users.service';
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

  //for the title of page
  activeUser: User = new User();

  expensesMainList;
  incomesMainList;

  totalExpenses: number;
  totalIncomes: number;

  expensesCategoryArray: string[];
  incomesCategoryArray: string[];

  expensesCategoryTotalsArray: number[];
  incomesCategoryTotalsArray: number[];

  //varibales used in *ngIf for the extra cash element
  extraAmount: number = this.totalIncomes - this.totalExpenses;
  isExtra: boolean;
  isEqual: boolean;
  isDefecient: boolean;


  //update all data from expenses and incomes services

  updateExpenses() {
    this.expensesService.getExpenses().subscribe(expenses => {

      delete expenses._id;
      this.expensesMainList = expenses;

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
      this.expensesCategoryTotalsArray = categoryTotals;

      let categories = [];
      for (let category in expenses) {
        if (expenses[category].length >= 1 && category != "_id") {
          categories.push(category);
        }
      }
      this.expensesCategoryArray = categories;

      let totalExpenses = 0;
      for (let category in expenses) {
        for (let expense of expenses[category]) {
          totalExpenses += expense.amount;
        }
      }
      this.totalExpenses = totalExpenses;


    })
  }

  updateIncomes() {

    this.incomesService.getIncomes().subscribe(incomes => {
      delete incomes._id;

      this.incomesMainList = incomes;


      let categoryTotals = []
      for (var category in incomes) {
        let sum = 0;
        for (var income of incomes[category]) {
          sum += income.amount;
        }
        if (sum != 0 && !isNaN(sum)) {
          categoryTotals.push(sum);
        }
      }
      this.incomesCategoryTotalsArray = categoryTotals || [0];

      let categories = [];
      for (let category in incomes) {
        if (incomes[category].length >= 1 && category != "_id") {
          categories.push(category);
        }
      }
     this.incomesCategoryArray = categories || ["No Incomes"];

     let totalIncomes = 0;
        for (let category in incomes) {
          for (let income of incomes[category]) {
            totalIncomes += income.amount;
          }
        }
        this.totalIncomes = totalIncomes;



    })


  }
  updateData() {

    this.updateExpenses();

    this.updateIncomes();



    this.extraAmount = this.totalIncomes - this.totalExpenses;

    if (this.extraAmount === 0) {
      this.isEqual = true;
      this.isDefecient = false;
      this.isExtra = false;


    } else if (this.extraAmount < 0) {
      this.isDefecient = true;
      this.isExtra = false;
      this.isEqual = false;


    } else {
      this.isExtra = true;
      this.isDefecient = false;
      this.isEqual = false;

    }

  }
  constructor(private expensesService: ExpensesService,
    private incomesService: IncomesService,
    private usersService: UsersService) {
    this.updateData();
    this.activeUser = this.usersService.getActiveUser();

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


  enableEdit(element: any) {
    element.disabled = false;

  }

  disableEdit(income: Income, expense: Expense, element: any) {

    if(income){
       this.incomesService.editIncome(income).subscribe(()=>{this.updateData(); console.log('income updated')});
    } else if(expense){
      this.expensesService.editExpense(expense).subscribe(()=>{this.updateData(); console.log('expense updated')});
    }
     element.disabled = true;

  }

}
