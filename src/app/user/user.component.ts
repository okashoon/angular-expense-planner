import { IncomesService } from '../incomes.service';
import { ExpensesService } from '../expenses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ExpensesService, IncomesService]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
