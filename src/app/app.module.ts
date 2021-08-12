import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { FormsModule } from "@angular/forms";
import { ExpenseService } from './services/expense.service';




const routers : Routes = [
  {path: 'expenses', component: ListExpensesComponent},
  {path: 'Addexpense', component:AddExpenseComponent},
  {path: 'editexpense/:id', component:AddExpenseComponent},
  {path: '', redirectTo : '/expenses' , pathMatch: 'full'}
  
  ];
@NgModule({
  declarations: [
    AppComponent,
    ListExpensesComponent,
    AddExpenseComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    
   
    RouterModule.forRoot(routers)
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
