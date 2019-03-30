import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Setting} from "../../app.setting";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErpService {

  constructor(private http: HttpClient) { }

  public connectToErp():Observable<string>{
    return this.http.get(Setting.connectToErp(),{responseType: 'text'});
  }
}
