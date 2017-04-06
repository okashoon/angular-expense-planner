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
  updateData() {

    this.expensesService.getExpenses().subscribe(expenses => {
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

    })
    this.incomesMainList = this.incomesService.getMainList();


    this.totalExpenses = this.expensesService.getTotalExpenses();
    this.totalIncomes = this.incomesService.getTotalIncomes();

    //categpries of expenses/incomes (labels) -- checking first that its not empty, otherwise assign "no expenses" to it
    this.incomesCategoryArray = this.incomesService.getCategories()[0] && this.incomesService.getCategories() || ["No Incomes"];

    //total expenses/incomes for  each category
    this.incomesCategoryTotalsArray = this.incomesService.getCategoryTotalsArray()[0] && this.incomesService.getCategoryTotalsArray() || [0];

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

  disableEdit(element: any) {
    element.disabled = true;
    //to save updated list to local storage
    this.expensesService.editExpense();
    this.incomesService.editIncome();
    this.updateData();

  }

}
