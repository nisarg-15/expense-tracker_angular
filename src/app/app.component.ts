import { Component } from '@angular/core';
import { ExpenseService} from './expense.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-tracker';
 
  expense: Array<any> = [];
  totalRec : number | undefined;
  page: number = 1;
  loadExpense: any;

  //Constructor injected with the Service Dependency
    constructor(private serv: ExpenseService) {
        this.expense = new Array<any>();
    }
    //4. Load all Employees
    ngOnInit() {
		console.log('gggg');
        this.loadExpense();
    }
    private loadEmployee() {
      this
          .serv
          .getexpense()
          .subscribe((resp: Response) => {
              this.loadExpense = resp.json();
              this.totalRec = this.expense.length;
              console.log(this.totalRec);
              console.log(this.page);
      
              //console.log(JSON.stringify(resp.json()));    
          });
  }
}


