import { Component, OnInit } from '@angular/core';
import {Customer} from "../../app.model";
import {QueryService} from "../../services/query/query.service";

@Component({
  selector: 'app-clients',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  data: Customer[] = [];

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getCustomers()
      .subscribe(data => this.data = data);
  }
}
