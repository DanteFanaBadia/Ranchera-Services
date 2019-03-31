import { Injectable } from '@angular/core';
import {User} from "../../app.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Setting} from "../../app.setting";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {GeneralService} from "../general/general.service";


const KEY_USER = "user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;

  constructor(protected http: HttpClient,
              protected router: Router,
              private general: GeneralService) {}

  public isLogin(): boolean{
    return localStorage.getItem(KEY_USER) != null;
  }

  public save(user: User){
    localStorage.setItem(KEY_USER, JSON.stringify(user));
  }

  public load(): User{
    this.user = JSON.parse(localStorage.getItem(KEY_USER));
    return this.user;

  }

  public get(): User{
    return this.user;
  }

  public login(loginForm):Observable<User>{
    this.general.activeLoading();
    return this.http.post<User>(Setting.login(), loginForm)
      .pipe(
        tap((user) => this.user = user),
        tap((user) => this.save(user)),
        tap(x => this.general.desActiveLoading())
      );
  }

  public logOut(){
    this.user = null;
    localStorage.removeItem(KEY_USER);
    this.router.navigate([''])
  }

}
