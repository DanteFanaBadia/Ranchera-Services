import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {QueryService} from "../../services/query/query.service";
import {Customer, Employee, Route, Stop} from "../../app.model";
import {MatAutocompleteSelectedEvent} from "@angular/material/typings/esm5/autocomplete";
import {RouteService} from "../../services/route/route.service";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";


export interface State {
  flag: string;
  name: string;
  population: string;
}


@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  filteredEmployee: Observable<Employee[]>;
  filteredCustomer: Observable<Customer[]>;
  employees: Employee[] = [];
  customers: Customer[] = [];

  customerAuto = new FormControl();
  employeeAuto = new FormControl();

  route: Route = {
    stops: []
  };

  constructor(private query: QueryService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder,
              protected router: Router,
              private routeService: RouteService) {
  }

  private filterEmployees(value: string): Employee[] {
    const filterValue = value.toLowerCase();
    return this.employees.filter(employee => {
      return employee.displayName.toLowerCase().indexOf(filterValue) === 0;
    });
  }

  private filterCustomers(value: string): Customer[] {
    const filterValue = value.toLowerCase();
    return this.customers.filter(customer => {
      return customer.displayName.toLowerCase().indexOf(filterValue) === 0;
    });
  }

  ngOnInit(): void {
    this.filteredEmployee = this.employeeAuto.valueChanges
      .pipe(
        startWith(''),
        map(employee => employee ? this.filterEmployees(employee) : this.employees.slice())
      );

    this.filteredCustomer = this.customerAuto.valueChanges
      .pipe(
        startWith(''),
        map(customer => customer ? this.filterCustomers(customer) : this.customers.slice())
      );

    this.query.getEmployees()
      .subscribe(x => this.employees = x);
    this.query.getCustomers()
      .subscribe(x => this.customers = x);
  }

  onSelectedCustomer(selected:MatAutocompleteSelectedEvent){
    const filterValue = selected.option.value;
    const customer = this.customers.filter(customer => {
      return customer.id.toLowerCase().indexOf(filterValue) === 0;
    })[0];

    const addr = customer.shipAddr;
    const addrStr = '';
    if(addr != null){

    }
    const stop : Stop= {
      address: addrStr,
      name: customer.displayName,
      client: +customer.id,
      priority: 0
    };

    this.route.stops.push(stop);
  }

  onSelectedEmployee(selected:MatAutocompleteSelectedEvent){
    const filterValue = selected.option.value;
    const employee = this.employees.filter(employee => {
      return employee.id.toLowerCase().indexOf(filterValue) === 0;
    })[0];

    this.route.name = employee.displayName;
    this.route.user = +employee.id;
  }

  save(){
    this.routeService.create(this.route)
      .subscribe((x) => {
        this.snackBar.open(`Ruta #${x.id} creada`,"OK", {
          duration: 2000,
          verticalPosition: "bottom"
        });
        this.router.navigate(['/routes'])
      });
  }
}
