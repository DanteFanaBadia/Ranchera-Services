import { Component, OnInit } from '@angular/core';
import {Authorization, Invoice} from "../../app.model";
import {QueryService} from "../../services/query/query.service";
import {ErpService} from "../../services/erp/erp.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-authorizations',
  templateUrl: './authorizations.component.html',
  styleUrls: ['./authorizations.component.scss']
})
export class AuthorizationsComponent implements OnInit {

  data: Authorization[] = [];

  constructor(private queryService: QueryService,
              private erpService: ErpService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.queryService.getAuthorizations()
      .subscribe(data => this.data = data);
  }

  connectToErp(){
    this.erpService.connectToErp()
      .subscribe((s) => this.onSuccess(s), (error) => this.onError(error));
  }

  onSuccess(s){
    console.log(s);
    window.location.href = s;
  }

  onError(error){
    console.log(error);
    this.snackBar.open("No se pudo procesar la autorizacion","OK",{
      duration: 3000
    });
  }

}
