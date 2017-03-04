import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GroceryCalcComponent } from './grocery-calc/grocery-calc.component';
import { HomeloanCalcComponent } from './homeloan-calc/homeloan-calc.component';
import { BusinessCalcComponent } from './business-calc/business-calc.component';
import { DropdownDirective } from './dropdown.directive';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  {path:'grocery', component: GroceryCalcComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroceryCalcComponent,
    HomeloanCalcComponent,
    BusinessCalcComponent,
    DropdownDirective,
    ResultsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
