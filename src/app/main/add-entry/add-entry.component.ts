import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  expense = true;
  income = false

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
