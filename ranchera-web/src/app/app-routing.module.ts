import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesComponent} from "./pages/routes/routes.component";
import {PaymentsComponent} from "./pages/payments/payments.component";
import {AuthorizationsComponent} from "./pages/authorizations/authorizations.component";
import {EmployeesComponent} from "./pages/employees/employees.component";
import {InvoicesComponent} from "./pages/invoices/invoices.component";
import {CustomersComponent} from "./pages/customers/customers.component";
import {HomeComponent} from "./pages/home/home.component";
import {RouteComponent} from "./pages/route/route.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'routes/:id', component: RouteComponent },
  { path: 'routes/add/', component: RouteComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'authorizations', component: AuthorizationsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
