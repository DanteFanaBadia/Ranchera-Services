import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Setting} from "../../app.setting";
import {Observable} from "rxjs";
import {GeneralService} from "../general/general.service";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ErpService {

  constructor(private http: HttpClient,
              private general: GeneralService) { }

  public connectToErp():Observable<string>{
    this.general.activeLoading();
    return this.http
      .get(Setting.connectToErp(),{responseType: 'text'})
      .pipe(
        tap(x => this.general.desActiveLoading())
      );
  }
}
