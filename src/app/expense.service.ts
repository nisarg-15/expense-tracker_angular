import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  getexpense: any;
 
  constructor(private httpService: HttpClient) { }
  
}

