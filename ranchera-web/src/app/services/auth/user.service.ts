import { Injectable } from '@angular/core';
import {User} from "../../app.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Setting} from "../../app.setting";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";


const KEY_USER = "user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;

  constructor(protected http: HttpClient,
              protected router: Router) {}

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
    return this.http.post<User>(Setting.login(), loginForm)
      .pipe(
        tap((user) => this.user = user),
        tap((user) => this.save(user)),
      );
  }

  public logOut(){
    this.user = null;
    localStorage.removeItem(KEY_USER);
    this.router.navigate([''])
  }

}
