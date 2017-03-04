import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-calc',
  templateUrl: './grocery-calc.component.html',
  styleUrls: ['./grocery-calc.component.css']
})
export class GroceryCalcComponent implements OnInit {

  groups: number[] = [1];

  constructor() { }

  ngOnInit() {
  }

  addRow(){
    this.groups.push(this.groups[this.groups.length-1]++);
  }
  deleteRow(){
    this.groups.splice(this.groups[this.groups.length-2],1)
  }

}
