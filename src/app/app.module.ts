import { IncomesService } from './incomes.service';
import { ExpensesService } from './expenses.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { ResultsComponent } from './main/results/results.component';
import { AddExpenseComponent } from './main/add-Entry/add-expense/add-expense.component';
import { AddIncomeComponent } from './main/add-entry/add-income/add-income.component';
import { AddEntryComponent } from './main/add-entry/add-entry.component';
import { DetailReportComponent } from './detail-report/detail-report.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {path: 'report', component: DetailReportComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ResultsComponent,
    AddExpenseComponent,
    AddIncomeComponent,
    AddEntryComponent,
    DetailReportComponent,
    MainComponent
  ],
  imports: [
    ChartsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IncomesService, ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
