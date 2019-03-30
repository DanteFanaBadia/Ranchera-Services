import { Component, OnInit } from '@angular/core';
import {Invoice} from "../../app.model";
import {QueryService} from "../../services/query/query.service";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  data: Invoice[] = [];

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getInvoices()
      .subscribe(data => this.data = data);
  }

}
