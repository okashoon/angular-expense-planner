import { IncomesService } from './incomes.service';
import { ExpensesService } from './expenses.service';
import { UsersService } from './users.service';
import { DatabaseService } from './database.service';
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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const userRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'report', component: DetailReportComponent}
]

const appRoutes: Routes = [
  {path: '', component: LandingComponent},  
  {path: 'user/:id', component: UserComponent, children: userRoutes},
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
    LandingComponent,
    LoginComponent,
    SignupComponent,
    UserComponent
  ],
  imports: [
    ChartsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IncomesService, ExpensesService, UsersService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
