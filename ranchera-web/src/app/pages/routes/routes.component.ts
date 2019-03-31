import { Component, OnInit } from '@angular/core';
import { Route} from "../../app.model";
import {QueryService} from "../../services/query/query.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  data: Route[] = [];

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getRoutes()
      .subscribe(data => this.data = data);
  }
}
