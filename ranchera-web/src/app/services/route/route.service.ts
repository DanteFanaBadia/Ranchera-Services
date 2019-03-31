import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Route} from "../../app.model";
import {Observable} from "rxjs";
import {Setting} from "../../app.setting";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }

  public create(route: Route): Observable<Route>{
    return this.http.post<Route>(Setting.routes(), route);
  }
}
