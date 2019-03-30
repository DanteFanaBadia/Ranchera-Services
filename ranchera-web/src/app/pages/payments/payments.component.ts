import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query/query.service";
import {Payment} from "../../app.model";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  data: Payment[] = [];

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getPayments()
      .subscribe(data => this.data = data);
  }

}
