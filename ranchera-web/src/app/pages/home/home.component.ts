import { Component, OnInit } from '@angular/core';
import { Dashboard} from "../../app.model";
import {QueryService} from "../../services/query/query.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Dashboard = {
    lastedOrders: [],
    lastedPayments: [],
    lastedClients: []
  };

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getDashboard()
      .subscribe(data => this.data = data);
  }
}
