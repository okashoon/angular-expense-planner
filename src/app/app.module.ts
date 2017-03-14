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
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'report', component: DetailReportComponent},
  {path: 'landing', component: LandingComponent},  
  {path: "", redirectTo: '/landing', pathMatch: 'full'}
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
    MainComponent,
    LandingComponent
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
