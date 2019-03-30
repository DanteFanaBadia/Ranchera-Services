import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Setting} from "../../app.setting";
import {Authorization, Customer, Employee, Invoice, Payment, Route} from "../../app.model";

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) {}

  public getInvoices(): Observable<Invoice[]>{
    return this.http.get<Invoice[]>(Setting.invoices());
  }

  public getPayments(): Observable<Payment[]>{
    return this.http.get<Payment[]>(Setting.payments());
  }

  public getAuthorizations(): Observable<Authorization[]>{
    return this.http.get<Authorization[]>(Setting.authorizations());
  }

  public getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(Setting.customers());
  }

  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(Setting.employees());
  }

  public getRoutes(): Observable<Route[]>{
    return this.http.get<Route[]>(Setting.routes());
  }
}
