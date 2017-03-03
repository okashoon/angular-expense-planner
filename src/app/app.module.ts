import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GroceryCalcComponent } from './grocery-calc/grocery-calc.component';
import { HomeloanCalcComponent } from './homeloan-calc/homeloan-calc.component';
import { BusinessCalcComponent } from './business-calc/business-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroceryCalcComponent,
    HomeloanCalcComponent,
    BusinessCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
