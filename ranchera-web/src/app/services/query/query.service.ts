import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pipe} from "rxjs";
import {Setting} from "../../app.setting";
import {Authorization, Customer, Dashboard, Employee, Invoice, Payment, Route} from "../../app.model";
import {GeneralService} from "../general/general.service";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient,
              private general: GeneralService) {}

  public getInvoices(): Observable<Invoice[]>{
    this.general.activeLoading();
    return this.http
      .get<Invoice[]>(Setting.invoices())
      .pipe(
        tap(x => this.general.desActiveLoading())
      );
  }

  public getPayments(): Observable<Payment[]>{
    this.general.activeLoading();
    return this.http.get<Payment[]>(Setting.payments())
    .pipe(
      tap(x => this.general.desActiveLoading())
    );
  }

  public getAuthorizations(): Observable<Authorization[]>{
    this.general.activeLoading();
    return this.http.get<Authorization[]>(Setting.authorizations())
    .pipe(
      tap(x => this.general.desActiveLoading())
    );
  }

  public getCustomers(): Observable<Customer[]>{
    this.general.activeLoading();
    return this.http
      .get<Customer[]>(Setting.customers())
      .pipe(
        tap(x => this.general.desActiveLoading())
      );
  }

  public getEmployees(): Observable<Employee[]>{
    this.general.activeLoading();
    return this.http.get<Employee[]>(Setting.employees()).
    pipe(
      tap(x => this.general.desActiveLoading())
    );
  }

  public getRoutes(): Observable<Route[]>{
    this.general.activeLoading();
    return this.http.get<Route[]>(Setting.routes()).
    pipe(
      tap(x => this.general.desActiveLoading())
    );
  }

  public getDashboard(): Observable<Dashboard>{
    this.general.activeLoading();
    return this.http.get<Dashboard>(Setting.dashboard()).
    pipe(
      tap(x => this.general.desActiveLoading())
    );
  }
}
