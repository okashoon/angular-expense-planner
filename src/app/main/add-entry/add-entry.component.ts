import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent  {

  constructor() { 
  }


  //variables to toggle view between add-expense and add-income components
  expense = false;
  income = true;

  toggleView(tab: string) {
    if (tab === "expense") {
      this.expense = true;
      this.income = false;
    }
    else if (tab === "income") {
      this.income = true;
      this.expense = false;
    }
  }


}
