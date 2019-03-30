import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpBasicInterceptor} from "./interceptors/http.interceptor";
import {DataTableModule} from "angular-6-datatable";
import { PaymentsComponent } from './pages/payments/payments.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { RoutesComponent } from './pages/routes/routes.component';
import { AuthorizationsComponent } from './pages/authorizations/authorizations.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomeComponent } from './pages/home/home.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentsComponent,
    EmployeesComponent,
    InvoicesComponent,
    RoutesComponent,
    AuthorizationsComponent,
    CustomersComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    DataTableModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpBasicInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
