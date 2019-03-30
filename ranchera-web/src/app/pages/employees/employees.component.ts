import { Component, OnInit } from '@angular/core';
import {Employee, Payment} from "../../app.model";
import {QueryService} from "../../services/query/query.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  data: Employee[] = [];

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getEmployees()
      .subscribe(data => this.data = data);
  }

}
